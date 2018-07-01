export default async (utils, data) => {

  const jqueryfile = () => {
    return Boolean(data.resources.filter(i => i.name.toLowerCase() === ('jquery.js' || 'jquery.min.js')).length)
  }

  const onwindow = async () => {
    return await data.DOM.execInContext(() => {return Boolean(window.$ || window.jQuery)})
  }

  return({
    name: 'jQuery',
    testpoints: [
      {
        name: 'hasfile',
        test: jqueryfile(),
        weight: 5
      },
      {
        name: 'tactonwindow',
        test: await onwindow(),
        weight: 6
      },
    ],
    info: {
      type: 'library',
      value: '',
      url: '',
      meta: {}
    },
  })

}
