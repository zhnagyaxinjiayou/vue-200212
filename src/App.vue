<template>
 <div class="todo-container">
    <div class="todo-wrap">
      <!-- 使用组件 -->
    <!-- <Header :addTodo='addTodo'></Header> -->
    <!-- <Header @addTodo='addTodo'></Header> -->
    <Header ref="add"></Header>
     <Main :todos='todos' :updataOne='updataOne' :deleteOne='deleteOne'></Main>
     <!--  props方法- -->
     <!-- <Foorter :todos='todos' :updateAall='updateAall' :deleteAll='deleteAll'></Foorter> -->
     <!-- 全局事件总线 -->
     <Foorter :todos='todos' :updateAall='updateAall' ></Foorter>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 导入组件
import Header from '@/components/Header'
import Foorter from '@/components/Foorter'
import Main from '@/components/Main'

export default {
  mounted() {
    this.$refs.add.$on('addTodo',this.addTodo)
    // this.$bus 全局事件总线对象
    // 通过给这个事件总线对象绑定事件，回调还留在父组件中
    this.$bus.$on('deleteAll',this.deleteAll)
  },
  data(){
    return{
      todos:JSON.parse(localStorage.getItem('todos_key')) || []
    }

  },
  // 注册组件
  methods: {
    addTodo(obj){
      this.todos.unshift(obj)
    },
    updataOne(index,val){
      this.todos[index].isOver=val
    },
    deleteOne(index){
      this.todos.splice(index,1)
    },
    updateAall(val){
      this.todos.forEach(item=>item.isOver=val)
    },
    deleteAll(){
      // 把已经完成的isOver为true的删除掉
      // 也可以是把isOver为false的留下

      this.todos=this.todos.filter(item=>!item.isOver)

    }
  },

  components:{
    Header,
    Foorter,
    Main
  },
  watch:{
    todos:{
      deep:true,
      handler(newval,oldval){
        localStorage.setItem('todos_key',JSON.stringify(newval))
      }
    }

  }
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>
