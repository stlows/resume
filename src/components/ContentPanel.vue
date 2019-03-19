<template>
    <div class="content-panel">
        <my-title></my-title>
        <my-section v-for="section in sections" :key="section.key" :section="section" :lang="lang"></my-section>
    </div>
</template>

<script>
import Title from './Title.vue';
import Section from './Section.vue';
import Experiences from '../data/experiences.js';
import Formations from '../data/formations.js';

export default {
    data() {
        return {
            sections:[
                {
                    'key':'apropos',
                    icon:'fas fa-info-circle',
                    'title':'À propos',
                    'body':'Après l’obtention de son diplôme de l’Université de Montréal en actuariat, la passion de Vincent pour la technologie le rattrape et le fait changer de domaine. Sa curiosité, sa rigueur et son désir de vouloir trouver des solutions efficaces et simples font de lui un excellent programmeur. Vincent aime profiter de la vie. Entre deux lignes de code, vous le trouverez en randonnée à l’autre bout du monde, en chute libre dans le ciel, au chalet avec sa famille ou autour d’une bière avec des amis.',
                    'cards':[]
                },
                {
                    'key':'experiences',
                    icon:'fas fa-check-square',
                    'title':'Expériences et projets',
                    'body':'',
                    cards: Experiences.experiences
                },
                {
                    'key':'formations',
                    'icon':'fas fa-graduation-cap',
                    'title':'Formations',
                    'body':'',
                    cards: Formations.formations
                }
            ]
        }
    },
    components: {
        'my-title': Title,
        'my-section': Section,
    },
    props:{
        'lang':String
    }
}
</script>

<style scoped>
    .content-panel{
        display:block;
        height:100%;
        background-color: #cccccc;
        padding-left: 275px;
    }
</style>