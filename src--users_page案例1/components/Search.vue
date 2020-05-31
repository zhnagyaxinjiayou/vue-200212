<template>
<section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchname"/>
        <button @click="seach">Search</button>
      </div>
      <!-- <Main/> -->
    </section>
</template>

<script type="text/ecmascript-6">
import Main from '@/components/Main'
export default {
    data(){
        return{
            searchname:''
        }
    },
    methods: {
        seach(){
           this.$bus.$emit('searchAjax',this.searchname)
        }
    },
    components:{
        Main
    }
}
</script>

<style scoped>


</style>
