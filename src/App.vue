<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <el-row>
    <ElButton @click="onForward">前进</ElButton>
    <ElButton @click="onBackward">后退</ElButton>
    <ElButton @click="onTurnLeft">左转</ElButton>
    <ElButton @click="onTurnRight">右转</ElButton>
  </el-row>
  <el-row>
    <el-input v-model="msg" clearable style="width: 200px" />
    <el-button @click="sendTollm" >Send</el-button>
  </el-row>
  <el-row>
    <el-text class="mx-1">content:{{content}}</el-text>
  </el-row>
  <el-row>
    <el-button @click="onTest">Test</el-button>
  </el-row>
  <template>

</template>

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
      socket: null,
      msg: "", 
      content: ""
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
    sendTollm() {
      this.socket.send(this.msg);
    },
    onTest() {
      let s = "你是谁，你在哪里？我要走了!好的。";
      let ss = ""
      s.split('').forEach((element) => {
        //console.log(element + index);
        ss += element;

        if (element == '.' || element == '。' || element == ',' || element == '，' || element == '.' || element == '。' || element == '?' || element == '？' || element == '!' || element == '!') {
            console.log(ss);
        } 
      }) 

    }
  },
  created() {
    this.socket = new WebSocket('ws://localhost:3000/llm');

    this.socket.onopen = () => {
      console.log('WebSocket 连接已打开');
    };

    var txtToTTS = "";
    this.socket.onmessage = (event) => {
      // this.msg = event.data;
      // console.log(event.data);

      this.content += event.data;


      //split to short sentense to tts
      event.data.split('').forEach((element) => {
        //console.log(element + index);
        txtToTTS += element;

        if (element == '.' || element == '。' || element == ',' || element == '，' || element == '.' || element == '。' || element == '?' || element == '？' || element == '!' || element == '!') {
            console.log(txtToTTS);
            txtToTTS = "";
        } 

      });

      // console.log(JSON.stringify(event.data.command))
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
