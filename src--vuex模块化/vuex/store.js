import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// vuex整体数据都在这里向外暴露

// 分别引入
import { state } from "./state";
import {getters} from './getters'
import {actions} from './actions'
import { mutations } from "./mutations";

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
