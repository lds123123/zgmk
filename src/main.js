// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//swiper
import swiper from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
Vue.use(ElementUI)
Vue.use(swiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//拎一个写法
// new Vue({
//   // el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// }).$mount("#app")
