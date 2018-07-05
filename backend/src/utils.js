import htmlparser from 'htmlparser2'

export default (() => {

  const hasAtleast = (arr, num) => {
    let arrnum = arr.reduce((res, itm) => {
      return itm ? res + 1 : res
    }, 0)
    return arrnum >= num
  }

  const splitUrl = (url) => {
    let subdomain = '',
    domain = '',
    path = ''
    try{
      let trysub = /\/\/(\w+)\.\w+\.\w+/g.exec(url)
      subdomain = trysub ? trysub[1] : ''
      domain = /\/\/(.+?)\//g.exec(url)[1]
      path = /\.\w+(\/*[\w_\/-]*\/)/g.exec(url)[1]
    }
    catch(e){console.log(e)}
    return{
      subdomain:subdomain,
      domain: domain,
      path: path
    }
  }

  const getComments = (body) => {
    let pattern = /(\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*)/gm
    let matches = body.match(pattern).map(x => x.replace('\n', '').replace(/^ /, ''))
    return matches
  }

  return({
    hasAtleast: hasAtleast,
    splitUrl: splitUrl,
    getComments: getComments
  })

})()
