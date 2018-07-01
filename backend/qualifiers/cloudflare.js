export default async (utils, data) => {

  const cfcookie = () => {
    return Boolean(data.cookies.filter(i => i.name === '__cfduid').length)
  }

  const cfserver = () => {
    return data.headers.server === 'cloudflare'
  }

  const cfray = () => {
    return Boolean(data.headers['cf-ray'])
  }

  return({
    name: 'CloudFlare',
    testpoints: [
      {
        name: 'cookiecfid',
        test: cfcookie(),
        weight: 8
      },
      {
        name: 'cfserver',
        test: cfserver(),
        weight: 8
      },
      {
        name: 'cfray',
        test: cfray(),
        weight: 5
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
