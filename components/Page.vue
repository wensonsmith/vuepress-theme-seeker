<template>
<div>
    <Content />
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
            if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
                return this.$themeLocaleConfig.lastUpdated
            }
            if (typeof this.$site.themeConfig.lastUpdated === 'string') {
                return this.$site.themeConfig.lastUpdated
            }
            return 'Last Updated'
        },
    }
}
</script>

