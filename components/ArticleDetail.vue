<template>
<div>
    <Content/>
    <div class="last-updated" v-if="false">
        <span class="prefix">{{ lastUpdatedText }}</span>
        <CreateTime :datetime="lastUpdated" :showTime="true"/>
    </div>
</div>
</template>

<script>
export default {
    name: 'Page',
    computed: {
        lastUpdated() {
            return this.$page.lastUpdated
        },
        lastUpdatedText() {
            if (typeof this.$themeConfig.lastUpdated === 'string') {
                return this.$themeConfig.lastUpdated
            }

            return '最近更新'
        },
    },
    components: {
        CreateTime: () => import(/* webpackChunkName = "CreateTime" */ '@theme/components/CreateTime.vue'),
    },
}
</script>

<style lang="stylus">
@require '../styles/config'
.last-updated
    color $textColorLighter

.content__default
    p 
        > a 
            text-decoration: none;
            color: $textColor;
            margin: 0 5px;
            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.2em;
            background-position: 0 100%;
            transition: background-size 0.1s ease-in;
        
            &:hover
                color: $textColor;
                background-size: 100% 100%;
</style>
