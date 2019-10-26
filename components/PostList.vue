<template>
  <div class="posts">
    <template v-for="post of $pagination.pages">
        <AlbumCard v-if="post.frontmatter.type === 'album'" :post="post" :key="post.key"/> 
        <MurmurCard v-else-if="post.frontmatter.type === 'murmur'" :post="post" :key="post.key"/>
        <ArticleCard v-else :post="post" :key="post.key"/>
    </template>
  </div>
</template>

<script>
import ArticleCard from "./Cards/ArticleCard.vue";
import AlbumCard from "./Cards/AlbumCard.vue";
import MurmurCard from "./Cards/MurmurCard.vue";

export default {
  name: "List",
  created() {
  },
  components: {ArticleCard, AlbumCard, MurmurCard}
};
</script>