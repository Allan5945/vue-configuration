<template>
  <div id="app">
    <router-link to="demo1">demo1</router-link>
    <router-link to="demo2">demo2</router-link>
    <router-view></router-view>
    <el-button>element组件</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
  </div>
</template>
<script>
  import * as vx from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        radio: '1'
      }
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
