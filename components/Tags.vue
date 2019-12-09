<template>
    <div>
        <router-link class="tag" v-for="tag of tags" :key="tag" v-text="tag" :to="`/tags/${tag}`"></router-link>
    </div>
</template>

<script>
export default {
    props: {
        tags: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '../styles/config.styl'
.tag
    background: linear-gradient(120deg, #ffffff 50%, $readMoreBgColor 0%);
    padding 2px 5px
    margin-left: 15px
    font-size: 16px
</style>
