import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'
import About from '@/views/About'
import Message from "@/views/Message";
import News from "@/views/News";
import MessageDetail from "@/views/MessageDetail";
import NewsDetail from "@/views/NewsDetail";
// 定义一个路由器，暴露出去
export default new VueRouter({
    mode:'history',
  // 多个路由，每个路由都是一个对象
  routes: [
    {
      // 路径：给要显示的组件，定义的路由路径（当点击连接后，路径会变为它）
      path: "/home",
      // 代表显示的组价是哪个（当路径变为/home后，要显示的组件是 哪个）
      component: Home,
      //   子路由
      children: [
        {
          path: "/home/message",
          component: Message,

          children: [
            {
              path: "/home/message/info:msgid",
                  component: MessageDetail,
            //   props:true//1.表示把路由接收到的params参数作为子组件的属性让你使用
                  props(route) {
                //2.就是当前我们这个路由对象(经常是有的一种方式)
                      return {
                        msgid: route.params.msgid,
                        msgContent: route.query.msgContent,
                      };
                
                  },
                  name:'msgInfo'//命名路由


            },
          ],
        },
        {
          path: "/home/news",
          component: News,
          children: [
            {
              path: "/home/news/info:newsId",
                  component: NewsDetail,
                  props(router) {
                  return {
                    newsId: router.params.newsId,
                    newsContent: router.query.newsContent,
                  };
                  },
                  name:'newsInfo'
            },
          ],
          },
          {
              path: '/home',
              redirect:'/home/message'
        }
      ],
    },
    {
      // 内部是一个对象，对象内部是一个路径和应显示的组件
      path: "/about",
      component: About,
    },
    {
      path: "/",
      redirect: "/home", //重定向连接,如果你访问的路径是'/'那么我就转给"/home"
    },
  ],
});