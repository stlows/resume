<template>
<div class="col-xl-12 col-md-6 col-sm-12">
    <div class="row infoItem">
        <div class="col-md-2 col-4 text-right">
            <i :class="icon"></i>
        </div>
        <div class="col-md-10 col-8">
            <ul class="mb-0 pl-0">
                <li v-for="line in item" :key="line">{{ line }}</li>
            </ul> 
        </div>
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