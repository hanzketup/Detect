export default async (utils, data) => {

  const file = () => {
    let accepted_names = ['gtag.js', 'analytics.js']
    return Boolean(data.resources.filter(i => accepted_names.includes(i.name.toLowerCase())).length)
  }

  const cookies = () => {
    return Boolean(
      data.cookies.filter(i => i.name.toLowerCase() === '_ga').length
      && data.cookies.filter(i => i.name.toLowerCase() === '_gid').length
    )
  }

  return({
    name: 'Google Analytics',
    testpoints: [
      {
        name: 'hasFile',
        test: file(),
        weight: 4
      },
      {
        name: 'trackCookies',
        test: cookies(),
        weight: 8
      },
    ],
    info: {
      type: 'service',
      value: '',
      url: '',
      meta: {}
    },
  })

}
