import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // 存数据
  count: 0,
};

const mutations = {
  // 直接修改数据
  increment() {
    state.count++;
  },
  decrement() {
    state.count--;
  },
};

const actions = {
  // 间接修改数据，对应回调函数内部逻辑方法
  // 可以判断，循环，定时器
  increment(context) {
    context.commit("increment");
  },
  decrement(context) {
    context.commit("decrement");
  },
  incrementIfOdd(context) {
    if (context.state.count % 2 === 1) {
      context.commit("increment");
    }
  },
  incrementAsync(context) {
    setTimeout(() => {
      context.commit("increment");
    }, 1000);
  },
};

const getters = {
    // 代表的我们的数据，计算出来的数据，是有getter每有setter

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})