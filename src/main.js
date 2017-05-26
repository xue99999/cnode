import './common/css/reset.css'
import './iconfont/iconfont.css'


import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components/'

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key]) //转换为vFooter
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
