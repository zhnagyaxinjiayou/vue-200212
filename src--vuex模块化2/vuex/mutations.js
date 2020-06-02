import { REQUESTING, REQUSET_SUCCES, REQUEST_FALID } from './mutationsType'
export const mutations = {
         // 专门用来修改数据（直接修改）
         // 1.开始
         [REQUESTING](state) {
           state.isFlor = false;
           state.ifLoding = true;
         },
         // 2.发送
         [REQUSET_SUCCES]() {
           state.ifLoding = false;
           state.users = users;
         },
         // 3.失败
         [REQUEST_FALID](state, msg) {
           state.ifLoding = false;
           state.errMag = msg;
         },
       };