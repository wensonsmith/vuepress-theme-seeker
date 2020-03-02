<template>
    <div class="layout">
    <Hero/>
    <div class="container">
      <div class="page">
        <div class="page-left"></div>
        <div class="page-center content">
          <slot></slot>
          <slot name="pagination"/>
        </div>
        <div class="page-right"></div>
      </div>
    </div>
    
    <ClientOnly>
      <slot name="comment"></slot>
      <Footer/>
    </ClientOnly>
  </div>
</template>

<script>
import Hero from "../components/Header/Hero.vue";
import PostList from "../components/PostList.vue";
import Page from "../components/ArticleDetail.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
    name: 'Framework',
    components: {
        Hero, 
        PostList,
        Page,
        Footer
    }
}
</script>


<style src="../styles/index.styl" lang="stylus"></style>