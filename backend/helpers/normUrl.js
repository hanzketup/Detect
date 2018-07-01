import normalizeUrl from 'normalize-url'

export default (url) => {
  return (normalizeUrl(url) + '/')
}
