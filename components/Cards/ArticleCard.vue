<template>
  <div class="article">
    <div class="article__meta">
      <CreateTime :datetime="frontmatter.date || post.lastUpdated"/> /
      <router-link :to="`/categories/${frontmatter.category}`" v-if="frontmatter.category" v-text="frontmatter.category"></router-link>
      <span class="text-gray" v-else>未分类</span>
    </div>
    <div class="article__title">
      <router-link :to="post.path">{{ post.title }}</router-link>
      <Tags :tags="frontmatter.tags" style="float:right"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "ArticleCard",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    frontmatter() {
      return this.post.frontmatter
    }
  },
  components: {
      CreateTime: () => import(/* webpackChunkName = "CreateTime" */ '@theme/components/CreateTime.vue'),
      Tags: () => import(/* webpackChunkName = "BackButton" */ '@theme/components/Tags.vue'),
  }
};
</script>

<style lang="stylus">
@require '../../styles/config'

.article
  margin-bottom: 2em;
  &__meta
  &__meta a
    line-height 2.5em
    font-size 14px
    color $textColorLighter

  
  &__title
    font-size 1.3em
    font-weight  300
  
  &__createtime
    font-size 14px

  &__summary
    color: lighten($textColor, 30%)
</style>