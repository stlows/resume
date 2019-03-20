<template>
<div class="col-xl-12 col-md-6 col-sm-12">
    <div class="row infoItem">
        <div class="col-md-2 col-4 text-right"><i :class="icon"></i></div>
        <div class="col-md-10 col-8">{{ item }}</div>
    </div>
   </div>
    
</template>

<script>
export default {
    props:{
            'item': String,
            'icon':String
        }
    }   
</script>

<style scoped>
</style>