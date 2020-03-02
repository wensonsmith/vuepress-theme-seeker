<template>
    <div v-if="$site.themeConfig.valine" id="comments"></div>
</template>

<script>
export default {
    mounted() {
        window.AV = require('leancloud-storage')
        window.Valine = require('valine')
        this.initValine()
    },
    methods: {
        initValine() {
            new Valine({
                el: '#comments',
                appId: this.$site.themeConfig.valine.appId,
                appKey: this.$site.themeConfig.valine.appKey,
                visitor: true,
                recordIP: true,
                path: window.location.pathname,
            })
        }
    }
}
</script>

<style lang="stylus">
@require '../styles/config'
#comments
    background-color $containerBgColor
    padding-bottom 4em
    padding-left 20%
    > .vwrap
        background-color white
        border none
        border-radius 0
        padding 1em 2em
    
    > .vlist .vcard
        background-color white
        padding 1em 2em

    > .info
        display none
</style>