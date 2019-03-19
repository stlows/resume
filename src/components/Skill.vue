<template>
    <div class="skill" :title="getTitle(level)">
        <div class="skill-name">{{ name }}</div>
        <div class="skill-level" :style="getStyle(level)"></div>
    </div>
</template>

<script>
export default {
    props:{
        'name': String,
        'level': Number
    },
    methods:{
        getStyle(level){
            return {
                'width': 0.85 * level + '%'
            }
        },
        getTitle(level){
            if(level < 30){
                return 'Beginner'
            }else if(level < 50){
                return 'Intermediate'
            }else if(level < 80){
                return 'Advanced'
            }else{
                return 'Pro'
            }
        }
    }
}
</script>

<style scoped>

    .skill{
        margin-left: 10px;
        font-weight: 100;
        margin-bottom: 10px;
    }
    .skill-name{
        margin-bottom: 7px;
        font-size: 0.75em;
    }
    .skill-level{
        background-color: rgb(22, 124, 22);
        height: 3px;
        border-top-right-radius: 1px;
        border-bottom-right-radius: 1px;
    }


</style>