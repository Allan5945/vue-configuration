<template>
    <div>
      <h3>组件通讯</h3>
      <div>获取到父组件的数据是<span>{{pass}}</span></div>
      <button @click="res">传递给父组件数据</button>
    </div>
</template>
<script>
    export default {
      methods:{
        res:function () {
          this.$emit('resHead',66);
        }
      },
      props:['pass'],
    }
</script>
<style>
  span{
    color: red;
  }
</style>
