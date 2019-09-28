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
</style>
