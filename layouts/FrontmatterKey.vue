<template>
    <Framework>
        <BackButton/>
        <h1>分类检索</h1>
        <div>
            <div v-if="tags.length > 0">
                <router-link v-for="tag of tags" :key="tag.name" :to="tag.path">
                    <span v-text="tag.name"></span> ({{tag.pages.length}})
                </router-link>
            </div>

            <div v-if="categories.length > 0">
                <router-link v-for="category of categories" :key="category.name" :to="category.path">
                    <span v-text="category.name"></span> ({{category.pages.length}})
                </router-link>
            </div>
        </div>
    </Framework>
</template>

<script>
import Framework from '@theme/components/Framework.vue'
export default {
    computed: {
        tags() {
            return this.$tags.list || []
        },
        categories() {
            return this.$categories.list || []
        }
    },
    components: {
        Framework,
        BackButton: () => import(/* webpackChunkName = "BackButton" */ '@theme/components/BackButton.vue'),
    },
    created(){
        console.log(this)
    }
}
</script>

