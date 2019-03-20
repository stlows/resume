<template>
    <div class="skills">
        <h3>{{ title[lang] }}</h3>
        <skills-group 
            v-for="skillsGroup in skillsGroups"
            :key="skillsGroup.name[lang]"
            :skillsGroup="skillsGroup"
            :lang="lang">
        </skills-group>
    </div>
</template>

<script>
import SkillsGroup from './SkillsGroup.vue';
import SkillsData from '../data/skills.json';

export default {
    data(){
        return {
            skillsGroups: SkillsData.skills,
            title: SkillsData.title
        }
    },
    components: {
        'skills-group': SkillsGroup
    },
    props:{
        'lang':String
    }
}
</script>

<style scoped>
   .skills{
       border-top: 1px solid #cccccc;
   }
       h3 {
       font-weight: 100;
       letter-spacing: 5px;
       text-transform: uppercase;
       font-size: 1em;
       text-align: center;
       margin-top: 30px;
       margin-bottom: 30px;
   }
</style>