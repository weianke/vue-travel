import axios from 'axios'

export default class Axios {
  static ajax (url, options) {
    let baseUrl = 'https://www.easy-mock.com/mock/5c1f35b795d59f6b419e0015/travel/'
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
