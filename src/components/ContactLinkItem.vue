<template>
<div class="col-xl-12 col-md-6 col-sm-12">
    <a :href="item.redirect" target="_blank" class="link">
        <div class="row infoItem">
            <div class="col-md-2 col-4 text-right"><i :class="icon"></i></div>
            <div class="col-md-10 col-8">{{ item.label }}</div>
        </div>
    </a>
</div>
    
    
</template>

<script>
export default {
    props:{
            'item': Object,
            'icon':String
        }
    }   
</script>

<style scoped>
    a{
        text-decoration: none;
        color: inherit;
    }
    .link:hover {
        cursor: pointer;
        color: #aaaaaa;
    }
</style>