<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- <Add :addComment='addComment'/> 通过porps传递数据  -->
      <!-- <Add ref='add'/> 通过自定义事件从子组件拿数据 ， 自定义绑定事件本质-->

      <!-- 自定义绑定事件简写 -->
      <Add @addComment='addComment'/>
      <List :comments="comments" :deleteComment='deleteComment'/>
    </div>
  </div>
</template>

<script>
import Add from "@/components/Add";
import List from '@/components/List';

export default {
  components: {
    Add,
    List
  },
  // 自定义事件绑定事件的第一种写法
  // 生命周期回调
  // mounted(){
  //   //  this.$refs.add组件对象
  //   //  this.$refs.add.$on本质是vue原型的方法,(自定义事件名，回调函数)
  //   // 相当于在父组件中给子组件绑定了一个事件（自己定义的）
  //   // 特点：回调函数是在父组件中的  ($on绑定事件)在父组件中给子组件绑定了一个事件监听
  //   this.$refs.add.$on('addComment',this.addComment)

  // },
  data(){
    return{
      comments:[
        {id:1,username:'张三',content:'vue真棒'},
        {id:2,username:'李四',content:'vue666'},
        {id:3,username:'张老五',content:'vue888'},

      ]
    }
  },
  // 数据在哪里，造作操作的数据方法就在哪里
  methods:{
    // addComment(obj){
    //   // 往comments头部添加数据
    //   this.comments.unshift(obj)
    // }
     addComment(obj){
        this.comments.unshift(obj)//往comments头部添加一条数据
      },
      deleteComment(index){
        this.comments.splice(index,1)//从第几个数据，删除几个
      }

  }
};
</script>

<style  scoped></style>
