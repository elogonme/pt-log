import axios from 'axios'
import { TokenService } from './storage.service'
// import { BACKEND_URL } from '../config'

// this.init('http://localhost:44371')

const ApiService = {
  token: null,

  init(baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setAuthHeader() {
    const token = TokenService.getToken()
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },

  removeHeaders() {
    axios.defaults.headers.common = {}
    const token = TokenService.getToken()
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },

  get(resource) {
    this.setAuthHeader()
    return axios.get(resource)
  },

  post(resource, data) {
    this.setAuthHeader()
    return axios.post(resource, data)
  },

  postFile(resource, data) {
    this.setAuthHeader()
    return axios.post(resource, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  put(resource, data) {
    this.setAuthHeader()
    return axios.put(resource, data)
  },

  delete(resource, data) {
    this.setAuthHeader()
    return axios.delete(resource, { data })
  },

  download(url, filename) {
    // console.log(url)
    this.setAuthHeader()
    return axios({
      url: url,
      method: 'GET',
      responseType: 'blob' // important
    })
  },

  downloadPost(url, filename, payload) {
    // console.log(url)
    this.setAuthHeader()
    return axios({
      url: url,
      method: 'POST',
      responseType: 'blob', // important
      data: payload
    })
  }
}

export default ApiService
