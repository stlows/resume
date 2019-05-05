import Vue from "vue";
import Home from "./Home.vue";

export const ressources = new Vue({
  data: {
    lang: "fr"
  },
  methods: {
    setLanguage(newLang) {
      this.lang = newLang;
    }
  }
});

const app = new Vue({
  el: "#app",
  render: h => h(Home)
});