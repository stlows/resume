<template>
    <div class="contact">
        <h3>Contact</h3>
        <contact-info-item icon="fas fa-envelope" :item="myData.email"></contact-info-item>
        <contact-info-item icon="fas fa-phone fa-rotate-90" :item="myData.phone"></contact-info-item>
        <contact-info-item icon="fas fa-map-marker" :item="myData.address"></contact-info-item>
        <contact-info-item icon="fab fa-linkedin-in" :item="myData.linkedIn"></contact-info-item>
        <contact-info-item icon="fab fa-github" :item="myData.github"></contact-info-item>
        <contact-info-item icon="fas fa-globe" :item="myData.website"></contact-info-item>
        <contact-info-item icon="fas fa-language" :item="myData.languages"></contact-info-item>
    </div>
</template>

<script>
import ContactInfoItem from './ContactInfoItem.vue';
import MyData from '../data/personal.json';

export default {
    data() {
        return{
            myData: MyData
        }
    },
    components: {
        'contact-info-item': ContactInfoItem
    }
}
</script>

<style scoped>
    h3 {
       font-weight: 100;
       letter-spacing: 5px;
       text-transform: uppercase;
       font-size: 1em;
       text-align: center;
       margin-top: 30px;
       margin-bottom: 30px;
   }
</style>