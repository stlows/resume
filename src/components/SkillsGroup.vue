<template>
  <div class="skills-group">
    <div @click="showSkills = !showSkills" class="row no-gutters skills-title">
      <div class="col-1 text-center">
        <i :class="skillsGroup.icon"></i>
      </div>
      <div class="col-10">
        <span class="skills-group-name col-8">{{ skillsGroup.name[lang] }}</span>
      </div>
      <div class="col-1 text-center" v-if="skillsGroup.skills.length > 0">
        <i v-if="!showSkills" class="fas fa-plus"></i>
        <i v-if="showSkills" class="fas fa-minus"></i>
      </div>
    </div>
    <transition name="slide">
      <template v-if="showSkills">
        <div>
          <skill
            v-for="skill in skillsGroup.skills"
            :key="skill.name"
            :name="skill.name"
            :level="skill.level"
          ></skill>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
import Skill from "./Skill.vue";
import { ressources } from "../main.js";

export default {
  data() {
    return {
      showSkills: false
    };
  },
  computed: {
    lang() {
      return ressources.lang;
    }
  },
  props: {
    skillsGroup: Object
  },
  components: {
    skill: Skill
  }
};
</script>

<style scoped>
/*
.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.slide-enter-active {
  animation: slide-in 0.2s ease;
}
.slide-leave-active {
  animation: slide-out 0.2s ease;
}


@keyframes slide-in {
  from {
    transform: translateY(-150%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-150%);
  }
}
*/
.skills-group {
  margin-left: 15px;
  margin-bottom: 15px;
}
/*
.expand-btn {
  float: right;
  padding-right: 3px;
}
*/
.skills-title {
  text-transform: uppercase;
  border-bottom: 1px solid #cccccc;
  border-left: 3px solid #cccccc;
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 0.8em;
  margin-bottom: 10px;
  width: 90%;
}
.skills-title:hover {
  cursor: pointer;
  color: #aaaaaa;
  border-color: #aaaaaa;
}
i {
  padding: 0 5px;
}
</style>
