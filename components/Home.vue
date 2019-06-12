<template>
    <div>
        <h1>文章列表</h1>
        <div v-for="(post, index) of $pagination.posts" :key="index">
            <h2 class="item-title">
                <router-link :to="post.path">
                    {{ post.title }}
                </router-link>
            </h2>
        </div>

        {{$pagination}}
    </div>
</template>

<script>
    export default {
        name: 'Home',
        created(){
            console.log(this.$pagination)
        }
    }
</script>