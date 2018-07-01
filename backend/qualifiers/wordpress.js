export default async (utils, data) => {
  let version = ''

  const generatorMeta = () => {
    let findtag = data.MetaTags.filter(i => i.name === 'generator')
    if(findtag){
      return findtag.map(i => {
        let findwp = /(wordpress)/i.test(i.content)
        if(findwp){
          version = /(\d.\d.\d)/i.exec(i.content)[1]
        }
        return findwp
      }).includes(true)

      return [...findtag.map(i => /(wordpress)/i.test(i.content))].includes(true)
    }
    else{
      return false
    }
  }

  const wpincludes = () => {
    let findso = data.resources.filter(i => i.sameOrigin)
    return findso.reduce((res, req) => {
      String(utils.splitUrl(req.url).path).split('/').includes('wp-includes')
      ? res.push(true) : null
      return res
    } , []).includes(true)
  }

  const wpcontent = () => {
    let findso = data.resources.filter(i => i.sameOrigin)
    return findso.reduce((res, req) => {
      String(utils.splitUrl(req.url).path).split('/').includes('wp-content')
      ? res.push(true) : null
      return res
    } , []).includes(true)
  }

  const wpstyle = () => {
    let findstyle = data.resources.filter(i => i.name === 'style.css').length
    if(findstyle){
      // TODO read theme info from style.css and dump to meta
      return true
    }else{
      return false
    }

  }

  return({
    name: 'Wordpress',
    testpoints: [
      {
        name: 'generatorMeta',
        test: generatorMeta(),
        weight: 8
      },
      {
        name: 'urlwpincludes',
        test: wpincludes(),
        weight: 4
      },
      {
        name: 'urlwpcontent',
        test: wpcontent(),
        weight: 4
      },
      {
        name: 'wpstyle',
        test: wpstyle(),
        weight: 3
      }
    ],
    info: {
      type: 'CMS',
      value: version,
      url: '',
      meta: {}
    },
  })

}
