<template>
    <div class="my-title pt-5 pl-5 mb-5">
        <h1 class="mb-5">{{ personalData.name }}</h1>
        <h2>{{ personalData.jobTitle[lang] }}</h2>
    </div>
</template>

<script>
import personal from '../data/personal.json';
import {ressources} from '../main';

export default {
    data(){
        return {
            personalData: personal
        }
    },
    computed:{
        lang(){
            return ressources.lang;
        }
    }
}
</script>

<style scoped>
h1{
    letter-spacing: 5px;
}
h2{
    letter-spacing: 3px;
}
</style>