<template>
    <div class="skills-group">
        <h3>{{ skillsGroup.name['fr'] }}</h3>
        <skill v-for="skill in skillsGroup.skills" :key="skill.name" :name="skill.name" :level="skill.level"></skill>
    </div>
</template>

<script>
import Skill from './Skill.vue';

export default {
    
    props:{
        'skillsGroup':Object
    },
    components:{
        'skill': Skill
    }
}
</script>

<style scoped>
.skills-group{
    margin-left: 15px;
}
h3{
    text-transform: uppercase;
    border-bottom: 1px solid #cccccc;
    border-left: 3px solid #cccccc;
    padding: 5px;
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 0.8em;
    margin-bottom: 5px;
    width: 75%;

}
</style>
