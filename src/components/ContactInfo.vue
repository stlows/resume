<template>
  <div class="contact mb-3">
    <div class="infoPanelTitle">Contact</div>
    <div class="container-fluid">
      <div class="row">
        <contact-link-item icon="fas fa-envelope" :item="myData.email"></contact-link-item>
        <contact-info-item icon="fas fa-phone fa-rotate-90" :item="myData.phone"></contact-info-item>
        <contact-info-item icon="fas fa-map-marker" :item="myData.address"></contact-info-item>
        <contact-link-item icon="fab fa-linkedin-in" :item="myData.linkedIn"></contact-link-item>
        <contact-link-item icon="fab fa-github" :item="myData.github"></contact-link-item>
        <contact-link-item icon="fas fa-globe" :item="myData.website"></contact-link-item>
        <contact-info-item icon="fas fa-language" :item="myData.languages"></contact-info-item>
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfoItem from "./ContactInfoItem.vue";
import ContactListItem from "./ContactListItem.vue";
import ContactLinkItem from "./ContactLinkItem.vue";
import MyData from "../data/personal.json";

export default {
  data() {
    return {
      myData: MyData
    };
  },
  components: {
    "contact-info-item": ContactInfoItem,
    "contact-list-item": ContactListItem,
    "contact-link-item": ContactLinkItem
  }
};
</script>

<style scoped>
</style>