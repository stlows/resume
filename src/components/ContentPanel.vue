<template>
  <div class="content-panel">
    <my-title></my-title>
    <my-section v-for="section in sections" :key="section.key" :section="section"></my-section>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Section from "./Section.vue";
import SECTIONS from "../data/sections.js";

export default {
  data() {
    return {
      sections: SECTIONS.sections
    };
  },
  components: {
    "my-title": Title,
    "my-section": Section
  }
};
</script>

<style scoped>
.content-panel {
  height: 100%;
  background-color: #cccccc;
  padding-right: 25%;
}

@media screen and (max-width: 1199.9px) {
  .content-panel {
    padding-right: 5%;
  }
}
</style>