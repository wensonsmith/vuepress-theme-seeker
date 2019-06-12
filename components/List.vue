<template>
  <div class="posts">
    <div class="posts-list" v-for="(post, index) of $pagination.posts" :key="index">
      <template v-if="post.frontmatter.type === 'album'">
        <AlbumCard :post="post"/>
      </template>

      <template v-else-if="post.frontmatter.type === 'murmur'">
        <MurmurCard :post="post"/>
      </template>

      <template v-else>
        <ArticleCard :post="post"/>
      </template>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";
import AlbumCard from "./AlbumCard.vue";
import MurmurCard from "./MurmurCard.vue";

export default {
  name: "List",
  created() {
    console.log(this.$pagination);
  },
  components: {ArticleCard, AlbumCard, MurmurCard}
};
</script>