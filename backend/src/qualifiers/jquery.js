export default async (utils, data) => {

  const jqueryfile = () => {
    let accepted_names = ['jquery.js', 'jquery.min.js']
    return Boolean(data.resources.filter(i => accepted_names.includes(i.name.toLowerCase())).length)
  }

  const onwindow = async () => {
    return await data.DOM.execInContext(() => {return Boolean(window.$ || window.jQuery)})
  }

  return({
    name: 'jQuery',
    testpoints: [
      {
        name: 'hasFile',
        test: jqueryfile(),
        weight: 5
      },
      {
        name: 'onWindow',
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
