import Vue from "vue";
import Main from "./src/components/Main.vue";
import { makeServer } from "./src/server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

new Vue({
  render: (createEl) => createEl(Main),
}).$mount("#app");
