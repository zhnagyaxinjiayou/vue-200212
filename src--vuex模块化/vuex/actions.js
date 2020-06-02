import Axios from "axios";
import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAILD } from "./mutationType";

export const actions = {
         // 间接修改，逻辑……都在这个里面 内部可以写判断 异步 循环 发送请求
         // 第一个参数是上下文，第二个参数是传参的
         async searSend({ commit }, searName) {
           // 形参commit相当于是结构赋值  let {commit}=context
           commit(REQUESTING);
           try {
             let response = await axios({
               url: "https://api.github.com/search/users",
               method: "GET",
               params: {
                 p: searName,
               },
             });

             //    1.首先将数据都先放到users里
             let users = [];
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
             commit(REQUEST_SUCCESS, users);
             // 发送成功、
             // this.ifLoding = false;
           } catch (error) {
             //  this.ifLoding=false
             // this.errMag=error.message
             commit(REQUEST_FAILD, error.message);
           }
         },
       };

