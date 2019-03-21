<template>
    <div class="card mb-2">
        <div class="card-header">
            <h1>{{ card.title[lang] }}</h1>
            <h2>{{ card.subtitle[lang] }}</h2>
        </div>
        
        <div class="card-body">
            <p v-if="card.body">{{ card.body[lang] }}</p>
            <task v-for="task in card.tasks" :key="task.title['fr']" :task="task"></task>
        </div>
       
    </div>
</template>

<script>
import Task from './Task.vue';
import {ressources} from '../main';

export default {
    props:{
        'card': Object
    },
    computed:{
        lang(){
            return ressources.lang;
        }
    },
    components:{
        'task':Task
    }
}
</script>

<style scoped>
    .card {
        box-shadow: 1px 1px 10px #555555; 
    }
    h1{
        font-size: 0.9em;
    }
    h2 {
        font-size: 0.8em;
    }
    p{
        margin-bottom: 0;
    }
    
</style>