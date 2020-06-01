<template>
<div>
 <button @click="increment">+</button>
 <button @click="decrement">-</button>
 <!-- <button @click="incrementIfOdd">{{$store.state.count}}</button> -->
 <!-- 如果想直接写成count，那就可以使用grtters方法，用计算的方式去使用 -->
 <button @click="incrementIfOdd">{{count}}</button>
 <button @click="incrementAsync">{{count}}</button>
 <p>4倍count{{currentCount}}</p>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    // data(){
    //     return{
    //         count:0
    //     }
    // },
    methods: {
        increment(){
        //    this.$store.dispatch("increment");
        // 这里本来就是直接让数据增减的，没有必要发给actions然后再交给mutations去处理，
        // 这时候我们可以直接在这里提交给mutations去处理
           this.$store.commit("increment");
        },
        decrement(){
            // this.$store.dispatch('decrement')
            this.$store.commit('decrement')
        },
        incrementIfOdd(){
           this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync(){
           this.$store.dispatch('incrementAsync')
        }

        
    },
    computed: {
        count(){
            // 如果没有做过运算可以直接在计算属性中拿state里面的值
            return this.$store.state.count
        },
        currentCount(){
            // 如果经过运算了，可以拿计算属性里面的getters里面的值
            return this.$store.getters.currentCount
        }
    },
}
</script>

<style scoped>


</style>
