<template>
    <div class="row infoItem">
        <div class="col-sm-2">
            <i :class="icon"></i>
        </div>
        <div class="col-sm-10">
            <ul class="mb-0 pl-0">
                <li v-for="line in item" :key="line">{{ line }}</li>
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
    props:{
            'item': Array,
            'icon':String
        }
    }   
</script>

<style scoped>
ul {
        list-style: none;
    }
</style>