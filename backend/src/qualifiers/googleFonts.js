export default async (utils, data) => {
  let found_fonts = {}

  const request = () => {
    let made_request = data.resources.filter(i => utils.splitUrl(i.url).domain === 'fonts.googleapis.com')
    if(made_request.length){
      let font_string = made_request[0].url.split('=')[1]
      let fonts = font_string.split('|')
      found_fonts = fonts.reduce((res, f) => {
        let fo = {}
        let splt = f.split(':')
        splt[1]
        ? res[splt[0].replace(/\+/g, ' ')] = splt[1].replace(/,/g, ', ')
        : res[splt[0]] = 'default'
        return res
      }, {})
    }
    return Boolean(made_request.length)
  }

  return({
    name: 'Google Fonts',
    testpoints: [
      {
        name: 'requestMade',
        test: request(),
        weight: 8
      },
    ],
    info: {
      type: 'font',
      value: '',
      url: '',
      meta: {...found_fonts}
    },
  })

}
