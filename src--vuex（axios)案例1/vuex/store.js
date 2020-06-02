import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";
Vue.use(Vuex)

const state = {
    // 存放数据
  isFlor: true, //确定次否
  ifLoding: false, //确定是否加载
  errMag: "", //保存错误的数据
  users: [], //保存成功的数据
};

const mutations = {
  // 请求中在操作数据
    requesting(state) {
         state.isFlor = false;
         state.ifLoding = true;
    },
  // 请求成功在操作数据
    request_success(state,users) {
        state.ifLoding = false
        // 3.数据提交，传入参数，将传来的users变为上边state里面的users
        state.users=users
    },
  // 请求失败在操作数据
    request_faild(state,msg) {
         state.ifLoding = false;
         state.errMag = msg;
    }
};

const actions = {
  // 间接修改，逻辑……都在这个里面 内部可以写判断 异步 循环 发送请求
    // 第一个参数是上下文，第二个参数是传参的
    async searSend({ commit }, searName) {
        // 形参commit相当于是结构赋值  let {commit}=context
         commit("requesting");
       try{
            let response = await axios({
              url: "https://api.github.com/search/users",
              method: "GET",
              params: {
                p: searName,
              },
            });
           
        //    1.首先将数据都先放到users里
            let users=[]
            // // 遍历成功的数据
            response.data.item.forEach((item) => {
              // 从每个获取到的数据当中过滤我要的数据
              // 用户名
              let user_name = item.login;
              // 头像
              let user_img = item.avatar_url;
              // 地址
              let user_url = item.url;

              // 将 需要的数据整理成对象
              obj = {
                user_name,
                user_img,
                user_url,
              };
              // 将数据放入数组中
              users.push(obj);
            });
        //  2.通过这种方式将数据提交上去  
           commit("request_success",users);
            // 发送成功、
            // this.ifLoding = false;
          }catch(error){
        //  this.ifLoding=false
        // this.errMag=error.message
           commit("request_faild", error.message);

       }
     }

    }
 
const getters = {
  isFlor(state) {
    return state.isFlor;
  },
  ifLoding(state) {
    return state.ifLoding;
  },
  errMag(state) {
    return state.errMag;
  },
    users(state) {
        return state.users;
  }
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
