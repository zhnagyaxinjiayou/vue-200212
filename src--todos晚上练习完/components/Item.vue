<template>
 <li @mouseenter="handlerItem(true)" @mouseleave="handlerItem(false)" :class='Myclass'>
    <label>
    <input type="checkbox" v-model="isCheck"/>
    <span>{{comment.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow">删除</button>
 </li>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        comment:Object
    },
    data(){
        return{
            isShow:false,
            Myclass:'leaveClass'
        }
    },
    methods: {
        handlerItem(flag){
            flag?this.Myclass='enterClass':this.Myclass='leaveClass'
            this.isShow=!this.isShow
        }
    },
    computed: {
        isCheck:{
            get(){
            return this.comment.isOver
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
    background-color:pink;

}
.leaveClass{
    background-color: #fff;
}
</style>
