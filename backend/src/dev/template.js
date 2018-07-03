export default async (utils, data) => {

  const testFunction = () => {
    return Boolean()
  }

  return({
    name: 'name of qualifier',
    testpoints: [
      {
        name: 'testpoint name',
        test: testFunction(),
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
