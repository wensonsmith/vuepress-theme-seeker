<template>
<div>
    <Hero/>
    <div class="content main">
        <Page/>
    </div>
    
</div>
</template>

<script>
import Hero from "../components/Hero.vue"
import Page from "../components/Page.vue"

export default {
    name: 'Post',
    components: {
        Hero,
        Page
    },
    created(){
        console.log(this.$pagination)
    }
}
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>