import axios from 'axios'
import store from '../redux/Store/index.js'
import {isLoading, notLoading} from '../redux/Actions/global-loading.js'
// 添加请求拦截器
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 8000
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.dispatch(isLoading)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    store.dispatch(notLoading)
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios;