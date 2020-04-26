import Vue from "vue";
import Main from "./components/Main.vue";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

new Vue({
  render: (createEl) => createEl(Main),
}).$mount("#app");
