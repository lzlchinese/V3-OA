// src/axios.js
import axios from "axios";

// 创建一个Axios实例，可以根据需要配置baseURL、headers等
const instance = axios.create({
  baseURL: "/api", // 可以在.env文件中配置API的基础URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些处理，例如添加 token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
