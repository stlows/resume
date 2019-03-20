<template>
    <div class="infoPanel">
        <div class="row d-flex flex-wrap align-items-center">
            <div class="col-xl-12 col-md-3 col-xs-12 text-center">
                <img class="" src="../../../public/img/vbeaulieu.jpg" alt="">
            </div>
            <div class="col-xl-12 col-md-9 col-xs-12">
                <contact-info></contact-info>
            </div>
        </div>
        <skills-info></skills-info>
    </div>
</template>

<script>
import ContactInfo from '../ContactInfo.vue';
import Skills from '../Skills.vue';

export default {
    components: {
        'contact-info': ContactInfo,
        'skills-info': Skills,
    }
}
</script>

<style scoped>

    .infoPanel {
        background-color: #111;
        color: #cccccc;
        height:100%;
        box-shadow: 5px 2px 10px 0 #0000001f;
    }
    
    img {
        width: 100%;
        max-width: 300px;
    }
</style>