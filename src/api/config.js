import axios from 'axios'

export const baseUrl = 'http://localhost:3000'

// 创建一个请求的实例
const axiosInstance = axios.create({
  baseURL: baseUrl,
})

axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res.data, 'res')
    return res.data
  },
  (err) => {
    console.log(err, '网络错误')
  }
)
export { axiosInstance }
