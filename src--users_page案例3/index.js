import Vue from 'vue'
import App from '@/App'
// import "@babel/polyfill";
new Vue({
    beforeCreate() {
        Vue.prototype.$bus=this
    },
    el: "#app",
    render:h=>h(App)
    
})