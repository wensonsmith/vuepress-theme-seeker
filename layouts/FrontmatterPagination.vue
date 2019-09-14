<template>
    <Framework>
        <BackButton/>
        <h1 v-text="currentKey"></h1>
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
        }
    },
    components: {
        Framework,
        PostList,
        BackButton: () => import(/* webpackChunkName = "BackButton" */ '@theme/components/BackButton.vue'),
        Pagination: () => import(/* webpackChunkName = "Pagination" */ '@theme/components/Pagination.vue'),
    },
    created(){
        console.log(this)
        this.$page.frontmatter.title = 'hello world'
    }
}
</script>

