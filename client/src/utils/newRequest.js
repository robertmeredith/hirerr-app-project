import axios from 'axios'

const newRequest = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
})

export default newRequest
