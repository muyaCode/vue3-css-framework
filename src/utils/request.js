import axios from 'axios';
import Toast from 'vant/es/toast';
import store from '@/store/index.js';
import router from '../router/index.js'

const service = axios.create({
  baseURL: '/api',
  headers: {'Content-Type': 'application/json;charset=UTF-8'},
  withCredentials: false
});

service.interceptors.request.use(
  config => {
    if(store.state.token) {
      config.headers['token'] = store.state.token;
    }
    return config
  }
)

service.interceptors.response.use(
  response => {
    const {data} = response
    if(data.status == 200) {
      Toast.clear();
      return data
    } else if(data.status == 403) {
      // go login
      Toast({
        message: "去登录",
        onClose() {
          router.push({ path: '/me/login' })
        }
      })
    } else {
      // error
      Toast(data.msg);
      return Promise.reject(new Error(data.msg || 'Error'));
    }
  }
)

export default service