<template>
<div>
<button @click="increment">+</button>
<button @click="decremnt">-</button>
<button @click='incrementIfOdd'>{{$store.state.count}}</button>
<button @click="incrementAsync">{{$store.state.count}}</button>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  // data(){
  //   return{
  //     count:0
  //   }
  // },
  methods: {
    increment(){
      // this.count++
      // dispatcht代表分发
      this.$store.dispatch('increment')
    },
    decremnt(){
      // this.count--
      this.$store.dispatch('decrement')
    },
    incrementIfOdd(count){
      // if(this.count %2 ===1){
      //   this.count++
      // }
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync(count){
      // setTimeout(()=>{
      //   this.count++
      // },1000)
      this.$store.dispatch('incrementAsync')
    }
  },
}
</script>

<style scoped>


</style>
