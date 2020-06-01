import Vue from "vue";
import App from "@/App";
import store from '@/vuex/store'

// Vue.use(ElementUI);

new Vue({
  el: "#app",
  render:h => h(App),
  store,//注册vuex只有在这里注册以后vuex才生效
        //注册好之后，每个组件当中都可以通过this.$store拿到我们的vuex store对象

});