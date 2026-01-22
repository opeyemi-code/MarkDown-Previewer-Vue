import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/index.ts";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";

library.add(faClone, faCheck, faXmark);

createApp(App)
  .use(router)
  .use(Vue3Toastify, {
    autoClose: 3000,
    toastClassName: "custom-toast top-[60px] md:top-[100px]",
  } as ToastContainerOptions)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
