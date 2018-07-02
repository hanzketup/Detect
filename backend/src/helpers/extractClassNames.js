import htmlparser from 'htmlparser2'

export default (htmlstring) => {
  let classes = {
    html: [],
    body: [],
    all:  []
  }
  new htmlparser.Parser({
      onopentag: function(name, attribs){
        if(attribs.class){
          let classList = attribs.class.split(' ')
          if(name === 'html'){classes.html = classList}
          if(name === 'body'){classes.body = classList}
          classes.all.push(classList)
        }
      }
  }, {decodeEntities: true})
  .parseComplete(htmlstring)
  return classes
}
