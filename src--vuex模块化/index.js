import Vue from 'vue'
import App from '@/App'
import store from '@/vuex/store'
// import "@babel/polyfill";
new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
});