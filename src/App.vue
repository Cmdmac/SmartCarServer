<template>
  <el-tabs class="tabs" @tab-click="handleClick">
    <el-tab-pane label="Controller" name="first"><CarControll /></el-tab-pane>
    <el-tab-pane label="Location" name="second"><Location /></el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>

</template>

<script>

import CarControll from './components/CarControll.vue'
import Location from './components/Location.vue'

export default {
  name: 'App',
  components: {
    CarControll, Location
  },
  data() {
    return {
      socket: null,
      msg: "", 
      content: ""
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)

    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
