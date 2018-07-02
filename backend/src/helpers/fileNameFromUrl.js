
export default (url) => {
  let pattern = /\/([\w-_\.]+\.\w+)(?!\/)(\?.+)*$/g
  let match = pattern.exec(url)

  if(Array.isArray(match)){
    return match[1]
  } else{
    return ''
  }
}
