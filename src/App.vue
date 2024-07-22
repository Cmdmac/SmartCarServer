<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <ElButton @click="onForward">前进</ElButton>
  <ElButton @click="onBackward">后退</ElButton>
  <ElButton @click="onTurnLeft">左转</ElButton>
  <ElButton @click="onTurnRight">右转</ElButton>
  <el-button>test</el-button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      socket: null
    }
  },
  methods: {
    onForward() {
      this.socket.send(JSON.stringify({command: 0}));
    },
    onBackward() {
      this.socket.send(JSON.stringify({command: 1}));
    },
    onTurnLeft() {
      this.socket.send(JSON.stringify({command: 2}));
    },
    onTurnRight() {
      this.socket.send(JSON.stringify({command: 3}));
    },
  },
  created() {
    this.socket = new WebSocket('ws://localhost:3000/web');

    this.socket.onopen = () => {
      console.log('WebSocket 连接已打开');
    };

    this.socket.onmessage = (event) => {
      this.message = event.data;
      console.log(event.data);
      console.log(JSON.stringify(event.data.command))
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket 错误:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket 连接已关闭');
    };
  },
  beforeUnmount() {
    this.socket.close();
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
</style>
