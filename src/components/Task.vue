<template>
    <div class="my-task">
        <div class="task-header" @click="showSub = !showSub">
            <span class="task-title" v-html="task.title[lang]"></span>
            <span class="expand-btn" v-if="task.subtasks.length > 0">
            <i v-if="!showSub" class="fas fa-plus"></i>
            <i v-if="showSub" class="fas fa-minus"></i>
            </span>
        </div>
        
        <ul class="secondary-task" :class={hidden:!showSub}>
            <li v-for="subtask in task.subtasks" :key="subtask.title">
                <span>{{subtask[lang]}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {ressources} from '../main';

export default {
    data(){
        return {
            showSub: false
        }
    },
    computed:{
        lang(){
            return ressources.lang;
        }
    },
    props:{
        'task':Object
    }
}
</script>

<style scoped>
.hidden{
    display: none;
}
.task-header:hover{
    cursor: pointer;
}
.expand-btn{
    float:right;
}
.task-title{
    display: inline-block;
    font-size: 1em;
    max-width: 90%;
}
.my-task{
    border:1px #cccccc solid;
    border-bottom: 0;
    padding:10px 15px;
    color: #333333;
}
.my-task:last-of-type{
    border-bottom: 1px #cccccc solid;
}
ul.secondary-task{
    padding-left: 15px;
    list-style: none;
    max-width: 85%;
    margin-bottom: 0;
}
ul.secondary-task span{
    font-size: 0.8em;
    display: block;
    margin-top:5px;
}
ul.secondary-task>li{
    border-left: 4px solid #535992;
    padding-left: 5px;
    border-bottom-left-radius: 5px;
}
</style>
