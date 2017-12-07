<template>
  <div id="app">
    <!--<el-button>默认按钮</el-button>-->
    <router-link to="demo1">demo1</router-link>
    <router-link to="demo2">demo2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  import * as vx from 'vuex'

  export default {
    name: 'app',
    data() {
      return {}
    },
    methods: {
      ...vx.mapActions([
        'testVuex'
      ])
    },
    mounted: function () {

    },
    computed: {
      ...vx.mapGetters([
        'testData'
      ])
    },
    components: {}
  }
</script>
