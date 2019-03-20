<template>
    <div class="skills">
        <div class="infoPanelTitle">
            {{ title[lang] }}   
        </div>
        <skills-group 
            v-for="skillsGroup in skillsGroups"
            :key="skillsGroup.name[lang]"
            :skillsGroup='skillsGroup'>
        </skills-group>
    </div>
</template>

<script>
import SkillsGroup from './SkillsGroup.vue';
import SkillsData from '../data/skills.json';
import {ressources} from '../main.js';

export default {
    data(){
        return {
            skillsGroups: SkillsData.skills,
            title: SkillsData.title
        }
    },
    computed:{
        lang(){
            return ressources.lang;
        }
    },
    components: {
        'skills-group': SkillsGroup
    }
}
</script>

<style scoped>
   .skills{
       border-top: 1px solid #cccccc;
   }
</style>