import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import News from "@/views/News";
import MessageDetail from "@/views/MessageDetail";
import NewsDetail from "@/views/NewsDetail";

// 默认暴露
export default new VueRouter({
    mode:'history',
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/message",
          component: Message,
          children: [
            {
              path: "/home/message/info:msgId",
              component: MessageDetail,
              //   props:true,//代表可以把路由接收到的params参数作为子组件的属性去使用
              //   props:{username:'赵丽颖'} //很少用只能给子组件传递默认静态值
              props(route) {
                return {
                  msgId: route.params.msgId,
                  msgContent: route.query.msgContent,
                };
              },
              name: "msgInfo",
            },
          ],
        },
        {
          path: "/home",
          redirect: "/home/message",
        },
        {
          path: "/home/news",
          component: News,
          children: [
            {
              path: "/home/news/info:newsId",
                  component: NewsDetail,
                  props(route) {
                      return {
                        newsId: route.params.newsId,
                        newsContent: route.query.newsContent,
                      };
                  },
                  name:'newsInfo',
              
            },
          ],
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});