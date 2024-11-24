import Vue from 'vue'
import App from './App.vue'
import router from './router' // Import the router for managing routes

// Import axios configuration
import axiosInstance from './axios' // This is where you'll set up Axios

Vue.config.productionTip = false

// Global Axios instance available throughout the app
Vue.prototype.$axios = axiosInstance

new Vue({
  render: (h) => h(App),
  router, // Use the router
}).$mount('#app')
