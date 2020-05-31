<template>
 <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searName"/>
        <button @click="search">Search</button>
      </div>
    </section>
</template>

<script type="text/ecmascript-6">

export default {
    data(){
        return{
            searName:''
        }
    },
    methods: {
        // 触发事件是发送数据
        search(){
            // 发送searName
         this.$bus.$emit('searchAjax',this.searName)
        }

    },
   
}
</script>

<style scoped>


</style>
