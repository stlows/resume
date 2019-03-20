<template>
    <div class="my-title">
        <h1>{{ personalData.name }}</h1>
        <h2>{{ personalData.jobTitle[lang] }}</h2>
    </div>
</template>

<script>
import personal from '../data/personal.json';
export default {
    data(){
        return {
            personalData: personal
        }
    },
    props:{
        'lang':String
    }
}
</script>

<style scoped>
    .my-title{
        padding: 40px 0 0 40px;
        margin-bottom: 40px;
    }
    h1, h2 {
        text-transform: uppercase;
        letter-spacing: 5px;
    }
    h1 {
        color: #333333;
        margin-bottom: 35px;
        font-size: 1.2em;
    }
    h2 {
        color: #555555;
        font-size: 0.8em;
    }

</style>