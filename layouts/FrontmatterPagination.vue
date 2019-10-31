<template>
    <Framework>
        <BackButton/>
        <h1> <span v-text="currentKey"></span><span class="divider">/</span> <span class="count" v-text="count"></span></h1>
        <br/>
        <PostList></PostList>
        <Pagination slot="pagination"/>
    </Framework>
</template>

<script>
import Framework from '@theme/components/Framework.vue'
import PostList from '@theme/components/PostList.vue'

export default {
    computed: {
        currentKey() {
            return this.$currentCategories ? this.$currentCategories.key : this.$currentTags.key
        },
        count() {
            return this.$pagination.pages.length || 0
        }
    },
    components: {
        Framework,
        PostList,
        BackButton: () => import(/* webpackChunkName = "BackButton" */ '@theme/components/BackButton.vue'),
        Pagination: () => import(/* webpackChunkName = "Pagination" */ '@theme/components/Pagination.vue'),
    },
    created(){
        // this.$page.frontmatter.title = 'hello world'
    }
}
</script>

<style lang="stylus">
@require '../styles/config'
.divider
    color $decorationColor
    padding 0 0.5em
.count
    font-weight 300
</style>

