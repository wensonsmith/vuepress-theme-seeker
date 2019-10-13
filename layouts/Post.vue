<template>
    <framework>
        <header class="page-header">
            <div class="page-header__nav">
                <BackButton></BackButton>
            </div>
            <div class="page-header__title">
                <h1 v-text="$page.title"></h1>
                <div class="tags-wrapper">
                    <Tags :tags="$frontmatter.tags"/>
                </div>
            </div>
            <div class="page-header__meta">
                <span class="meta__item">
                    <i class="iconfont">&#xe614;</i> 
                    <CreateTime :datetime="$page.frontmatter.date"></CreateTime>
                </span>
                <span :id="$page.path" class="leancloud_visitors meta__item" :data-flag-title="$page.title">
                    <i class="iconfont">&#xe674;</i>
                    <i class="leancloud-visitors-count">loading</i>
                </span>
            </div>
        </header>
        <br><br>
        <ArticleDetail/>
        <Comment slot="comment"></Comment>
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
        Tags: () => import(/* webpackChunkName = "Tags" */ '@theme/components/Tags.vue'),
        Comment: () => import(/* webpackChunkName = "CreateTime" */ '@theme/components/Comment.vue'),
    },
}
</script>

.<style lang="stylus">
@require '../styles/config'

.page-header
    &__title
        display flex
        > h1
            flex 1
        > .tags-wrapper
            display flex
            align-items center
    &__meta
        color $textColorLighter
        .meta__item
            margin-right 1em
            > .iconfont
                margin-right 5px
</style>