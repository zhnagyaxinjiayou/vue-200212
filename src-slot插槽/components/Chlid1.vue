<template>
<div>
<p>我的第二个组件</p>
<slot>我是第二个组件的匿名</slot>
<slot name="aaa">我是具名</slot>
<ul>
    <li v-for="(arrs, index) in arr" :key="arrs.id">
        <slot name="qq" :arrs='arrs'>
            {{arrs.name}}{{arrs.id}}
        </slot>
    </li>
</ul>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    // props:['Chlid1']
    data(){
        return{
            arr:[
                {id:1,name:'欧阳锋'},
                {id:2,name:'欧阳娜娜'},
                {id:3,name:'欧阳XXX'},

            ]
        }
    }
}
</script>

<style scoped>


</style>
