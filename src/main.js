import Vue from 'vue'
import App from './App.vue'

export const ressources = new Vue({
  data: {
      lang: 'fr'
  },
  methods:{
    setLanguage(newLang){
      this.lang = newLang;
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
