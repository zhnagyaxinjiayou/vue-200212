// 分别引入
import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAILD } from './mutationType'

export const mutations = {
         // 请求中在操作数据
         [REQUESTING](state) {
           state.isFlor = false;

           state.ifLoding = true;
         },
         // 请求成功在操作数据
         [REQUEST_SUCCESS](state, users) {
           state.ifLoding = false;
           // 3.数据提交，传入参数，将传来的users变为上边state里面的users
           state.users = users;
         },
         // 请求失败在操作数据
         [REQUEST_FAILD](state, msg) {
           state.ifLoding = false;
           state.errMag = msg;
         },
       };

