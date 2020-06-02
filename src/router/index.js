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
              path: "home/message/info",
              component: MessageDetail,
            },
          ],
        },
        {
          path: "/home/news",
          component: News,
          children: [
            {
              path: "/home/news/info",
              component: NewsDetail,
            },
          ],
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
});