<template>
    <div class="row infoItem">
        <div class="col-sm-2"><i :class="icon"></i></div>
        <div class="col-sm-10">{{ item }}</div>
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