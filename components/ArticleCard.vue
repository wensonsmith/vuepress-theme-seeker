<template>
  <div class="article">
    <div class="article-meta">
      <CreateTime :datetime="post.frontmatter.date || post.lastUpdated"/> <router-link :to="post.path"> / <span v-text="post.frontmatter.category || '未分类'"></span></router-link>
      
      <!-- <span class="article-tags" v-for="tag of post.frontmatter.tags" :key="tag" v-text="tag"></span> -->
    </div>
    <div class="article-title">
      <router-link :to="post.path">{{ post.title }}</router-link>
      <div style="float:right">
          <span class="article-tags" v-for="tag of post.frontmatter.tags" :key="tag" v-text="tag"></span>
      </div>
      
    </div>
    <div class="article-summary" v-html="post.excerpt"></div>
    <div v-if="post.excerpt">
      <router-link class="read-more" :to="post.path">阅读更多</router-link>
    </div>
  </div>
</template>

<script>
import CreateTime from "./CreateTime.vue";

export default {
  name: "ArticleCard",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    CreateTime
  }
};
</script>

