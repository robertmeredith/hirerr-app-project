import axios from 'axios'

const newRequest = axios.create({
  baseURL: '/api/v1',
  // baseURL: 'http://localhost:5001/api/v1',
  withCredentials: true,
})

export default newRequest
