import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Element UI
import ElementUI from 'element-ui'

// 引入全局样式
import '@/styles/index.scss'
// 注册插件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
