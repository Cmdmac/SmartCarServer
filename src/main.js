import { createApp } from 'vue'
import { ElButton, ElInput, ElRow, ElText, ElTabs , ElTabPane} from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'

// Vue.component(Button.name, Button);

const app = createApp(App);
app.use(ElButton);
app.use(ElInput);
app.use(ElRow);
app.use(ElText);
app.use(ElTabs);
app.use(ElTabPane);

app.mount('#app')