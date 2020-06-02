import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
// import store from '@/vuex/store'
new Vue({
  el: "#app",
  render: (h) => h(App),
  // store
   router,//当我们在这里注册路由器之后，组件当中都可以获取到两个对象：this.$router(路由器对象）和this.$route（路由对象）
});