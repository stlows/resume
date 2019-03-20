<template>
    <div class="language-selection">
        <p v-if="lang == 'fr'">See this page in <span @click="setLanguage('en')">English</span></p>
        <p v-if="lang == 'en'">Voir cette page <span @click="setLanguage('fr')">Français</span></p>
    </div>
</template>

<script>
export default {
    props:{
        'lang': String
    },
    data() {
        return{
            my_lang: this.lang
        }
    },
    methods:{
        setLanguage(_lang){
            this.my_lang = _lang;
            this.$emit('OnLanguageChange', _lang);
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
</style>
