<template>
  <div id="app">
    <!--<img src="./static/img/145.jpg" alt="">-->
      <div id="sasa">&#xe624;</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'DemiLight';
    src: url("/src/static/font/iconfont.ttf");
  }
  #sasa{
    font-family: myface;
    color: red;
  }
  #app{
    color: red;
  }
</style>
