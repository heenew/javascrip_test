import { createApp } from "vue";
import App from "./App.vue";

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// global css
import "@/styles/main.css";

//createApp(App).mount("#app");에 use를 바로 쓰기엔 부담스러움으로 분리
const app = createApp(App);

// ElementPlus를 사용하겠다 !
app.use(ElementPlus);

app.mount("#app");
