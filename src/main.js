import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import smoothscroll from 'smoothscroll-polyfill';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created () {
    AOS.init({
      offset: 200,
      duration: 500,
    });
    smoothscroll.polyfill();
  },
}).$mount('#app')
