<template>
 <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="addt"/>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        addTodo:Function
    },
  data(){
        return{
            content:'',
        }

    },
    methods: {
        addt(){
            // 收集数据做成对象
            let content=this.content
            let id=Date.now()
            let isOver=false
            // 把收集的数据添加到todus里面
            if(content.trim()){
                let obj={
                    id,
                    content,
                    isOver
                }
                // this.addTodo(obj)
                this.$emit('addTodo',obj)//自定义事件
            }
              this.content=''
        }
    },
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
