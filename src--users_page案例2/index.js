import Vue from 'vue'
import App from '@/App'
// import "@babel/polyfill";
new Vue({
    // 创建全局事件总线
    beforeCreate() {
        Vue.prototype.$bus=this
    },

    el: '#app',
    render:h=>h(App)
})