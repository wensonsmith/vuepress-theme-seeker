<template>
    <div id="comments"></div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            new Valine({
                el: '#comments',
                appId: 'zpYH60z3swFivRMCzdH85xHw-gzGzoHsz',
                appKey: 'eB05xKa2vXzULbAkaqR2W1EK',
                visitor: true,
                recordIP: true,
            })
        }, 500);
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