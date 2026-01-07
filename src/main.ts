import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/index.ts";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faClone, faCheck);

createApp(App)
  .use(router)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
