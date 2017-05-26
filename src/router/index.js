import App from '../app'
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/home/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
	      {
	      	path: '/',
	      	component: Index
	      },
	      {
	      	path: '*', //其他页面
	      	redirect: '/'
	      }
      ]
    }
  ]
})
