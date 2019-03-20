<template>
    <a :href="item.redirect" target="_blank" class="link">
        <div class="row infoItem">
            <div class="col-sm-2">
                <i :class="icon"></i>
            </div>
            <div class="col-sm-10">
                {{ item.label }}
            </div>
        </div>
    </a>
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