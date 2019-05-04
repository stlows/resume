import Vue from "vue";
import Home from "./Home.vue";
import Portfolio from "./Portfolio.vue";

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
  data() {
    return {
      routes: {
        "/": Home,
        "/portfolio": Portfolio
      },
      currentRoute: window.location.pathname
    };
  },
  computed: {
    ViewComponent() {
      return this.routes[this.currentRoute] || Home;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
