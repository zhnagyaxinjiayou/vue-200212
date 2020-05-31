<template>
 <div class="todo-footer">
    <label>
        <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
        <span>已完成{{overNum}}</span> / 全部{{allNum}}
    </span>
    <button class="btn btn-danger" @click="daleteA">清除已完成任务</button>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  // props的三种写法
  // 1.props:['todos'],

  // 2.用的最多
  // props:{
  //    todos:Array
  // }
  // 3.
  props:{
    todos:{
      type:Array,
      // 默认值是一个空数组
      default:[]
    },
    updateAall:Function,
    // deleteAll:Function //props方法 全局事件总线不需要
  },
  computed: {
    overNum(){
      // 需要去统计todos里面所有的对象isover属性值为true的个数
      // return this.todos.filter(function(item,index){
      //   return item.isOver
      // })
      // 箭头函数的方式，返回值是一个新的数组
      return this.todos.filter(item => item.isOver).length

    },
    allNum(){
       return this.todos.length
    },
    isCheckAll:{
      // 读取值
      get(){
        return this.overNum===this.allNum && this.allNum>0
      },
      set(val){
        this.updateAall(val)
      }
    },
  },
  methods: {
     daleteA(){
      // this.deleteAll()  //props要调用的
      // 获取到全局事件总线，去触发事件
      this.$bus.$emit('deleteAll')
    }
  },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}


</style>
