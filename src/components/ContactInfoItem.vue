<template>
    <div class="contact-item" :class="{ link: item.redirect}">
        
        <template v-if="typeof item === 'string'">
            <i :class="icon"></i>   
            <span>{{ item }}</span>
        </template>

        <template v-else-if="Array.isArray(item)">
            <i :class="icon"></i>
            <span>
                <ul>
                    <li v-for="line in item" :key="line">{{ line }}</li>
                </ul>   
            </span>
        </template>

        <template v-else-if="item.redirect">
            <a :href="item.redirect" target="_blank">
                <i :class="icon"></i>   
                <span>{{ item.label }}</span>
            </a>
        </template>

    </div>
</template>

<script>
export default {
    props:{
            'item': [Object,String,Array],
            'icon':String
        }
    }   
</script>

<style scoped>
    .contact-item{
        margin-bottom: 10px;
        height: 30px;
    }
    i {
        margin-left: 20px;
    }
    span {
        float:right;
        width: 75%;
        font-weight: 100;
    }
    ul {
        margin-top: -10px;
        list-style: none;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
    .link:hover {
        cursor: pointer;
        color: #aaaaaa;
    }
</style>