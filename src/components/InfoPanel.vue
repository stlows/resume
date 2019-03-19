<template>
    <div class="infoPanel">
        <img src="../../public/img/vbeaulieu.jpg" alt="">
        <contact-info></contact-info>
        <skills-info></skills-info>
    </div>
</template>

<script>
import ContactInfo from './ContactInfo.vue';
import Skills from './Skills.vue'
export default {
    components: {
        'contact-info': ContactInfo,
        'skills-info': Skills,
    }
}
</script>

<style scoped>
    .infoPanel {
        float: left;
        width: 290px;
        height:100%;
        background-color: #111;
        color: #cccccc;
        box-shadow: 5px 2px 10px 0 #0000001f;
        
    }
    img {
        width: 100%;
    }
</style>