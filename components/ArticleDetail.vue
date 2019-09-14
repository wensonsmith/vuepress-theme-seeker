<template>
<div>
    <Content/>
    <div class="last-updated" v-if="lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
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
    created() {
        console.log(this.$page)
    }
}
</script>

