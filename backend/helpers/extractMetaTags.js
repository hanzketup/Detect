import htmlparser from 'htmlparser2'

export default (htmlstring) => {
  let tags = []
  new htmlparser.Parser({
      onopentag: function(name, attribs){
        if(name === "meta"){
          tags.push(attribs)
        }
      }
  }, {decodeEntities: true}).parseComplete(htmlstring)
  return tags
}
