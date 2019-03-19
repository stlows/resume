<template>
<div class="my-section">
    <h1><i :class="section.icon"></i>{{ section.title[lang] }}</h1>
    <p v-if="section.body[lang] != ''"> {{ section.body[lang] }} </p>
    <div class="cards" v-if="section.cards.length > 0">
        <card v-for="card in section.cards" :key="card.key" :card="card" :lang="lang" ></card>
    </div>
</div>
    
</template>

<script>
import Card from './Card.vue';

export default {
    data(){
        return {
        }
    },
    props:{
        'section': Object,
        'lang': String
    },
    components:{
        'card': Card
    }
}
</script>

<style scoped>
    .my-section{
        margin-left:40px;
        margin-bottom: 25px;
        width:650px;
    }
    i {
        margin-right: 10px;
    }
    h1 {
        text-transform: uppercase;
        font-weight: 100;
        color: #444444;
        font-size: 1.2em;
        margin-bottom: 15px;
        letter-spacing: 2px;
        border-left: 3px solid #222222;
        padding-left: 10px;
        border-bottom: 1px solid #222222;
        padding-bottom: 5px;
    }
    p{
        line-height: 1.5em;
        text-align: justify;
    }
</style>

