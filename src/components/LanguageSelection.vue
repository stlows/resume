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
    methods:{
        setLanguage(_lang){
            this.$emit('setLanguage', _lang);
        }
    }
}
</script>

<style scoped>
    .language-selection{
        padding: 20px 0; 
        text-align: center;
    }
    span {
        cursor: pointer;
        text-decoration: underline;
    }
</style>
