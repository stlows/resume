<template>
    <div class="skills-group">
        <h3>
            <i :class="skillsGroup.icon"></i>
            <span class="skills-group-name">{{ skillsGroup.name[lang] }}</span>
            <span class="expand-btn" v-if="skillsGroup.skills.length > 0" @click="showSkills = !showSkills">
                <i v-if="!showSkills" class="fas fa-plus"></i>
                <i v-if="showSkills" class="fas fa-minus"></i>
            </span>
        </h3>
        <template v-if="showSkills">
            <skill v-for="skill in skillsGroup.skills" :key="skill.name" :name="skill.name" :level="skill.level"></skill>
        </template>
    </div>
</template>

<script>
import Skill from './Skill.vue';
import {ressources} from '../main.js';

export default {
    data() {
        return {
            showSkills: false
        }
    },
    computed:{
        lang(){
            return ressources.lang
        }
    },
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
    margin-bottom: 15px;
}

.expand-btn:hover{
    cursor: pointer;
}
.expand-btn{
    float:right;
    padding-right: 3px;
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
    width: 90%;
    display: inline-block;
}
i {
    padding:0 5px;
}
</style>
