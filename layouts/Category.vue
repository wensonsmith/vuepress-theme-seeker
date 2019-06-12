<template>
<div>
    <Hero/>
    <div class="content main">
        <h1>{{categoryName}}</h1>
        <div v-for="post of $category.posts" :key="post.id">
            <router-link :to="post.path">
                {{post.title}}
            </router-link>
        </div>
    </div>

</div>
</template>

<script>
import Hero from "../components/Hero.vue"
import Page from "../components/Page.vue"

export default {
    components: {
        Hero,
        Page
    },
    created() {
        console.log(this.$category)
    },
    computed: {
        categoryName() {
            return this.$category.path.substr(10, 2)
        }
    }
}
</script>

