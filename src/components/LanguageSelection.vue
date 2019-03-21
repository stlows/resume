<template>
    <div class="language-selection">
        <p v-if="lang == 'fr'">See this page in <span @click="setLanguage('en')">English</span></p>
        <p v-if="lang == 'en'">Voir cette page <span @click="setLanguage('fr')">Français</span></p>
    </div>
</template>

<script>
import {ressources} from '../main';

export default {
    data() {
        return{
            lang: ressources.lang
        }
    },
    methods:{
        setLanguage(_lang){
            this.lang = _lang;
            ressources.setLanguage(_lang);
        }
    }
}
</script>

<style scoped>
    .language-selection{
        background-color: #333333;
        padding: 10px 0; 
        text-align: center;
        color: #eeeeee;
    }
    span {
        cursor: pointer;
        text-decoration: underline;
    }
    p{
        margin-bottom: 0;
    }
</style>
