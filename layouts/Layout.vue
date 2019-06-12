<template>
  <div class="layout">
    <Hero/>
    <div class="page">
      <div class="page-left"></div>
      <div class="page-center content">
        <List/>
        <Pagination/>
      </div>
      <div class="page-right"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import List from "../components/List.vue";
import Page from "../components/Page.vue";
import Footer from "../components/Footer.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Layout",
  components: {
    Hero,
    List,
    Page,
    Footer,
    Pagination
  },
  created() {
    console.log(this.$pagination);
  }
};
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
