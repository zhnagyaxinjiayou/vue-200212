import Axios from "axios";
import { REQUESTING, REQUSET_SUCCES, REQUEST_FALID } from './mutationsType'
export const actions = {
         // 用户操作真正的回调逻辑（跟用户打交道，不修改数据）
         // actions内部是不可以修改数据的，只可以提交给mutations修改数据
         async searSend(context, searName) {
           // 是数据，在修改，应该放在mutations中修改
           // this.isFlor = false;
           // this.ifLoding = true;
           context.commit(REQUESTING);

           try {
             let response = await axios({
               url: "https://api.github.com/search/users",
               method: "GET",
               params: {
                 p: searName,
               },
             });

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
             // 发送成功、
             //   this.ifLoding = false;
             context.commit(REQUSET_SUCCES, users);
           } catch (error) {
             //   this.ifLoding = false;
             //   this.errMag = error.message;
             context.commit(REQUEST_FALID, error.message);
           }
         },
       };