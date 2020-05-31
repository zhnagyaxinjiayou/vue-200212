// 渲染APP
import Vue from 'vue'
import App  from '@/App'
new Vue({
    beforeCreate() {
        // 事件总线：没必要 重新去实例化vue，因为本来vm就是vue实例，它可以做为事件总线去用
        Vue.prototype.$bus=this
    },
    el: "#root",
    render:h=>h(App)
})