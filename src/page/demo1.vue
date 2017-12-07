<template>
  <div>
    <h1>组件小例子：看代码</h1>
    <banner></banner>
    <div v-text="text"></div>
    <div v-html="hl"></div>
    <div v-if="showt">是否渲染节点 </div>
    <div v-show="showt1">等同于display:none</div>
    <input type="text" v-model="inputText">
    <communication :pass="pass" v-on:resHead="resHead"></communication>
    <button @click="testVuex()">触发改变vuex数据</button>
    <div>vuex存的数据:<h2 id="vuexd">  {{testData}}</h2></div>
    <button @click="med">axios请求数据例子</button>
  </div>
</template>
<script>
  import * as vx from 'vuex'
  import banner from './components/head.vue'
  import communication from './components/communication.vue'

  export default {
    data() {
      return {
        value: '存放组件数据',
        hl: '<p>渲染标签节点</p>',
        text: '渲染文字节点',
        showt: true,
        showt1: true,
        inputText: '双向绑定数据',
        pass:1000
      }
    },
    methods:{
      //这个里面是写方法
      ...vx.mapActions([
        'testVuex'
      ]),
      med:function () { // axios请求数据例子
        this.$ajax({
          method: 'post',
          url: '/login',
          params:{  // 参数

          },
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        })
          .then((response) => {  // 返回数据

          })
          .catch((error) => {
              console.log(error);
            }
          );
      },
      resHead:function (v) {
        alert(`获取到子组件数据${v}`);
      }
    },
    computed:{
      ...vx.mapGetters([
        'testData'
      ])
    },
    mounted:function () {
      console.log('组件挂载完成的触发事件,其它钩子函数看下vue的api');
    },
    components: {
      banner,
      communication
    }
  }
</script>
<style scoped lang="scss">
  div {
    background-color: skyblue;
  }
  #vuexd{
    color: red;
    display: inline-block;
  }
</style>
