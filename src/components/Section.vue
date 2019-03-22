<template>
  <div class="my-section mb-4">
    <h1 class="mb-3 pl-3 pb-1">
      <i class="mr-3" :class="section.icon"></i>
      {{ section.title[lang] }}
    </h1>
    <p v-if="section.body[lang] != ''" v-html="section.body[lang]"></p>
    <div class="cards" v-if="section.cards.length > 0">
      <card v-for="card in section.cards" :key="card.key" :card="card"></card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { ressources } from "../main";

export default {
  computed: {
    lang() {
      return ressources.lang;
    }
  },
  props: {
    section: Object
  },
  components: {
    card: Card
  }
};
</script>

<style scoped>
h1 {
  border-left: 3px solid #333333;
  border-bottom: 1px solid #333333;
}
p {
  line-height: 1.5em;
  text-align: justify;
  white-space: pre-line;
}
</style>

