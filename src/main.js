// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//在入口文件里面引入公共样式，
import 'assets/css/reset.css'
//引入iconfont
import 'assets/iconfont/iconfont.css'
//引入解决300毫秒延迟的问题的模块
import FastClick from 'fastclick'


FastClick.attach(document.body)//引入这句话，别忘了

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
