<template>
    <div class="card">
        <h1>{{ card.title[lang] }}</h1>
        <h2>{{ card.subtitle[lang] }}</h2>
        <p v-if="card.body">{{ card.body[lang] }}</p>
        <list-of-tasks v-if="card.tasks" :tasks="card.tasks" :lang="lang"></list-of-tasks>
    </div>
</template>

<script>
import ListOfTasks from './ListOfTasks.vue';

export default {
    props:{
        'card': Object,
        'lang': String
    },
    components:{
        'list-of-tasks':ListOfTasks
    }
}
</script>

<style scoped>

    .card {
        width: 650px;
        background-color: #fff;
        margin-top:7px;
        padding: 15px;
        box-shadow: 0 2px 5px 0 #00000029, 0 2px 10px 0 #0000001f;
    }
    h1, h2 {
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    h1{
        font-size: 0.9em;
        color:#333333;

    }
    h2 {
        font-size: 0.8em;
        color: #555555;
    }
    p {
        margin-top:15px;
        color: #444444;
    }
    
</style>