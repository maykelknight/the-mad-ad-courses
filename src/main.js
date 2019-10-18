import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created () {
    AOS.init({
      offset: 200,
      duration: 500,
    })
  },
}).$mount('#app')
