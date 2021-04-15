import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

import mock from './data.js'

let data = {
  books: mock,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
