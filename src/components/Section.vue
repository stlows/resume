<template>
<div class="my-section ml-5 mb-3">
    <h1 class="mb-3 pl-2 pb-1"><i class="mr-3" :class="section.icon"></i>{{ section.title[lang] }}</h1>
    <p v-if="section.body[lang] != ''"> {{ section.body[lang] }} </p>
    <div class="cards" v-if="section.cards.length > 0">
        <card v-for="card in section.cards" :key="card.key" :card="card"></card>
    </div>
</div>
    
</template>

<script>
import Card from './Card.vue';
import {ressources} from '../main';

export default {
    computed:{
        lang(){
            return ressources.lang;
        }
    },
    props:{
        'section': Object
    },
    components:{
        'card': Card
    }
}
</script>

<style scoped>
    h1 {
        border-left: 3px solid #222222;
        border-bottom: 1px solid #222222;
    }
    p{
        line-height: 1.5em;
        text-align: justify;
    }
</style>

