/* eslint-disable */

export default ({ app }, inject) => {
  inject('http', ({ url, params, data, method = 'POST', headers, ...options }) => {
    return app.$axios({
      // baseURL: process.env.TARGET_HOST,
      method,
      url,
      params,
      data,
      headers,
      ...options
    })
  })
}
