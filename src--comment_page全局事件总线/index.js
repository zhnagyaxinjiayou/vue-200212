import Vue from 'vue'
import App from '@/App'
new Vue({
    // 全局事件总线
    beforeCreate() {
        Vue.prototype.$bus=this
    },
    el: "#app",
    render:h=>h(App)
})