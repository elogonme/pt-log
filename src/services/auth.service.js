import ApiService from './api.service'
import { TokenService } from '../services/storage.service'

const AuthService = {
  async login(usename, password) {
    const token = ApiService.post('/token', { username, password })
    TokenService.saveToken(token)
    if (token) {
      return true
    } else {
      return false
    }
  }
}
