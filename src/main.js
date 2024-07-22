import { createApp } from 'vue'
import { ElButton } from 'element-plus';
import App from './App.vue'

// Vue.component(Button.name, Button);

const app = createApp(App);
app.use(ElButton);
app.mount('#app')