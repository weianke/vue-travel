import axios from 'axios'

export default class Axios {
  static ajax (url, options) {
    let baseUrl = process.env.NODE_ENV === 'production' ? '../../static' : 'static/'
    return axios({
      url: url,
      method: 'get',
      params: options ? (options.data) : '',
      baseURL: baseUrl
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }
}
