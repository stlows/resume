<template>
    <div class="skills-group">
        <h3 @click="showSkills = !showSkills">
            <i :class="skillsGroup.icon"></i>
            <span class="skills-group-name">{{ skillsGroup.name[lang] }}</span>
            <span class="expand-btn" v-if="skillsGroup.skills.length > 0">
                <i v-if="!showSkills" class="fas fa-plus"></i>
                <i v-if="showSkills" class="fas fa-minus"></i>
            </span>
        </h3>
        <transition name="slide">
            <template v-if="showSkills">
                <div class="skills-list">
                    <skill v-for="skill in skillsGroup.skills" :key="skill.name" :name="skill.name" :level="skill.level"></skill>
                </div>
            </template>
        </transition>
        
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

.skills-list{

}
.slide-enter-active{
    transform-origin: top;
    animation: slide-in 0.3s forwards;
}
.slide-leave-active{
    transform-origin: top;
    animation: slide-out 0.3s forwards;
}

@keyframes slide-in{
    from {
        transform: scaleY(0)
    }
    to {
        transform: scaleY(1)
    }
}
@keyframes slide-out{
    from {
        transform: scaleY(1)
    }
    to {
        transform: scaleY(0)
    }
}

.skills-group{
    margin-left: 15px;
    margin-bottom: 15px;
    position: relative;
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
h3:hover{
    cursor: pointer;
}
i {
    padding:0 5px;
}
</style>
