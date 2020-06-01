<template>
 <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="ImportCase" @keyup.enter="isEnter"/>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
   
    data(){
        return{
            ImportCase:''
        }
    },
     components:{
        isEnter(){
            // 收集数据
            let ImportCase=this.ImportCase
            // 将数据组装成对象
            obj={
                ImportCase
            }
            // 添加的组数中

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
