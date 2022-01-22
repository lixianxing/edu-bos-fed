import axios from 'axios'

const request = axios.create({
  timeout: 5000
})

function getBaseUrl (url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagounews.com'
  } else {
    return 'http://edufront.lagounews.com'
  }
}
request.interceptors.request.use(function (config) {
  config.baseURL = getBaseUrl(config.url)
  return config
})

export default request
