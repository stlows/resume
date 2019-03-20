<template>
    <div class="tasks">
        <task v-for="task in tasks" :key="task.title['fr']" :task="task" :lang="lang"></task>
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    props:{
        'tasks':Array,
        'lang': String
    },
    components:{
        'task':Task
    }
}
</script>

<style scoped>
.tasks{
    margin-top: 15px;
}
</style>
