import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify/vuetify'
import './assets/css/style.css'
import router from './router'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')