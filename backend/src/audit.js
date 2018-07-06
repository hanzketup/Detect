import puppeteer from 'puppeteer'

import extractClassNames from './helpers/extractClassNames'
import extractMetaTags from './helpers/extractMetaTags'
import fileNameFromUrl from './helpers/fileNameFromUrl'

export default (() => {

  let browser,
  page, url

  const begin = async (device='desktop', testEnv=false) => {
    browser = await puppeteer.launch({
      headless: true,
      args: testEnv ? ['--no-sandbox', '--disable-setuid-sandbox'] : []
    })
    page = await browser.newPage()

    // Setup Puppeteer
    await page._client.send('Network.setCacheDisabled', {cacheDisabled: true})
    await page._client.send('Network.enable')
    await page._client.send('DOMStorage.disable')

    // set Viewport for testing
    await page.setViewport(
      device === 'desktop' ? {width: 1440, height: 900}
      : device === 'tablet' ? {width: 768, height: 1024}
      : device === 'phone' ? {width: 384, height: 640}
      : {width: 1440, height: 900}
    )

  }

  const runAudit = async (url) => {

    let err, page_request, resources = []
    let domain = /\/\/(.+?)\//g.exec(url)[1]

    page.on('requestfinished', async response => {

      // exit early on css svg
      if(response._response._headers['content-type'] === 'image/svg+xml'){
        return}

      let security = response._response._securityDetails && {
        name: response._response._securityDetails._subjectName,
        protocol: response._response._securityDetails._protocol,
        issuer: response._response._securityDetails._issuer,
      }


      let request_domain = (() => {
        let test = /\/\/(.+?)\//g.exec(response._response._url)
        return test ? test[1] : ''
      })()

      let resData = {
        requestId: response._requestId,
        name: fileNameFromUrl(response._response._url),
        url: response._response._url,
        sameOrigin: (domain === request_domain),
        type: response._resourceType,
        status: response._response._status,
        method: response._method,
        headers: response._response.headers(),
        body: () => response._response.text(),
        security: security,
      }

      if(response._isNavigationRequest && response._response._status !== (301||302)){
        page_request = resData

        if(page_request.type !== 'document'){
          err = {
            status: 'failed',
            message: 'Provided url is not a page'
          }
        }

        if(page_request.status === 404){
          err = {
            status: 'failed',
            message: 'page not found (404)'
          }
        }

      }else{
        resources.push(resData)
      }

    })

    try{
      await page.goto(url)
    }
    catch(e){
      err = {
        status: 'failed',
        message: 'Navigation failed'
      }
    }

    await page.waitFor(200)

    let cookies = await page.cookies()
    let body = await page.content()
    let workers = await page.workers()

    if(err){return err}
    return({
      status: 'finished',
      data:{
        headers: page_request.headers,
        security: page_request.security,
        cookies: cookies,
        body: body,
        MetaTags: extractMetaTags(body),
        ClassNames: extractClassNames(body),
        resources: resources,
        workers: workers || 0,
        DOM:{
          execInContext: async (func) => await page.evaluate(func),
          querySelector: (selector, func) => page.$eval(selector, func),
          querySelectorAll: (selector, func) => page.$$eval(selector, func)
        }
      }
    })

  }


  const end = async () => {
    await page._client.send('Network.clearBrowserCache')
    await page._client.send('Network.clearBrowserCookies')
    await page.close()
    await browser.close()
  }

  return({
    begin: begin,
    runAudit: runAudit,
    end: end
  })

})()
