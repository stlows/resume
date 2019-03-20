<template>
    <div class="content-panel">
        <my-title :lang="lang"></my-title>
        <my-section v-for="section in sections" :key="section.key" :section="section" :lang="lang"></my-section>
    </div>
</template>

<script>
import Title from './Title.vue';
import Section from './Section.vue';
import SECTIONS from '../data/sections.js';

export default {
    data() {
        return {
            sections: SECTIONS.sections
        }
    },
    components: {
        'my-title': Title,
        'my-section': Section,
    },
    props:{
        'lang':String
    }
}
</script>

<style scoped>
    .content-panel{
        display:block;
        height:100%;
        background-color: #cccccc;
        padding-left: 290px;
        width:100%;
    }
</style>