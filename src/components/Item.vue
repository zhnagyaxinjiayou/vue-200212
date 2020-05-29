<template>
<!-- 移入移出 -->
 <li @mouseenter="handlerItem(true)" @mouseleave="handlerItem(false)" :class="myClass">
    <label>
      <!--如何展示打不打√，要通过v-model来拿 ，需要计算是否打钩-->
    <input type="checkbox" v-model="isCheck"/>
    <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
</li>
</template>

<script type="text/ecmascript-6">
export default {
   
  
    data(){
        return{
            // 设置数据删除按钮
            isShow:false,
            myClass:'leaveClass'
        }
    },
   
     props:{
        todo:Object,
        index:Number,
        updataOne:Function,
        deleteOne:Function
    },
    methods: {
        // flag接收参数true或false
        handlerItem(flag){
            // 移入移，去修改isshow的值，决定删除按钮的出现和隐藏
            // if(flag){
            //     this.isShow=true
            //     this.myClass='enterClass'

            // }else{
            //     this.isShow=false
            //     this.myClass='leaveClass'
            // }

            flag?this.myClass='enterClass':this.myClass='leaveClass'
            this.isShow=!this.isShow
        },
        deleteT(){
          this.deleteOne(this.index)
        }
    },
     computed: {
        isCheck:{
            get(){
                return this.todo.isOver
            },
            //自己点击打钩的状态 , 其实就是修改isCheck的值
            set(val){
              this.updataOne(this.index,val)
            }
        }
    },
   
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.enterClass{
    background-color: #aaa;
}
.leaveClass{
    background-color: #fff;
}

</style>
