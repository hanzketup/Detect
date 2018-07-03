export default async (utils, data) => {
  
  const reqid = () => {
    return Boolean(data.headers['x-github-request-id'])
  }

  const server = () => {
    return Boolean(data.headers['server'] === 'GitHub.com')
  }

  return({
    name: 'Github Pages',
    testpoints: [
      {
        name: 'reqID',
        test: reqid(),
        weight: 5
      },
      {
        name: 'server',
        test: server(),
        weight: 5
      },
    ],
    info: {
      type: 'host',
      value: '',
      url: '',
      meta: {}
    },
  })

}
