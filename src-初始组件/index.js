// 写实例化vue的代码
import Vue from "vue";
import App from "./App";
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  render: (h) => h(App),
});
