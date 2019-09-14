<template>
    <framework>
        <header class="page-header">
            <div class="page-header__nav">
                <BackButton></BackButton>
            </div>
            <div class="page-header__title">
                <h1 style="display: inline-block" v-text="$page.title"></h1>
                <CreateTime style="float:right" :datetime="$page.frontmatter.date"></CreateTime>
            </div>
            <div class="page-header__meta"></div>
        </header>
        
        <div class="tags">
            <router-link  v-for="tag of $frontmatter.tags" :key="tag" :to="`/tags/${tag}`">
                <span class="tag" v-text="tag"></span>
            </router-link>
        </div>
        <ArticleDetail/>
    </framework> 
</template>

<script>
import Framework from '@theme/components/Framework.vue'
import ArticleDetail from "../components/ArticleDetail.vue"

export default {
    name: 'Post',
    components: {
        Framework,
        ArticleDetail,
        CreateTime: () => import(/* webpackChunkName = "CreateTime" */ '@theme/components/CreateTime.vue'),
        BackButton: () => import(/* webpackChunkName = "BackButton" */ '@theme/components/BackButton.vue'),
    },
    created() {
        console.log(this)
    }
}
</script>

.<style lang="stylus">

</style>