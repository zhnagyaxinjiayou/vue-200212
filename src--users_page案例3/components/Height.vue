<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search"  v-model="searName" />
        <button @click="searSend">Search</button>
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
    searSend(){
      this.$bus.$emit('saerAjax',this.searName)
    }
  },

}
</script>

<style scoped>


</style>
