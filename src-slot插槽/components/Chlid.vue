<template>
<div>
   
<p>我的固定不变的</p>
<!-- slot匿名插糟，如果插糟内部有内容并且父组件没有给插槽传递内容，那么默认的内容会显示 -->
<!-- 如果插糟里有内容，并且父组件给插槽传递的内容，那么插槽的内容就会被父组件传来的内容覆盖 -->
<!-- <slot>
 <p>父组件传递内容，就不会显示插槽里的内容</p>
</slot> -->
<!-- 具名插糟 -->
<!-- <slot name='bb'>我是具名插糟</slot> -->
<!-- 作用域 -->
<!-- <ul>
    <li v-for="(perspn, index) in persons" :key="perspn.id">
        <slot name='ss' :perspn='perspn'>
            {{perspn.name}}
        </slot>
    </li>
</ul> --> 

<slot>我是匿名插槽</slot>
<slot name='aa'>我是具名插糟</slot>

<ul>
    <li v-for="(person, index) in persons" :key="person.id">
     <slot name='bb' :person='person'>
         {{person.name}}
     </slot>
    </li>
</ul>

<!-- <Chlid1 :Chlid1='Chlid1'></Chlid1> -->
</div>
</template>

<script type="text/ecmascript-6">
import Chlid1 from '@/components/Chlid1'

export default {
    // props:['Chlid1'],

    // components:{
    //     Chlid1,
    // },

    data(){
        return{
            persons:[
                {id:1,name:'匿名插槽'},
                {id:2,name:'具名插槽'},
                {id:3,name:'作用域插槽'}
            ]
        }
    },
}
</script>

<style scoped>


</style>
