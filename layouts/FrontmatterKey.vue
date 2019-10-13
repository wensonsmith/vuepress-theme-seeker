<template>
    <Framework>
        <BackButton/>
        <br/>
        <br/>
        <!-- <h2 class="text-center">分类</h2> -->
        <div class="categories" v-if="categories.length > 0">
            <router-link v-for="category of categories" :key="category.name" :to="category.path" class="categories__item">
                <h1><span class="divider">/</span><span v-text="category.name"></span></h1>
            </router-link>
        </div>
        <br/>
        <!-- <h2 class="text-center">标签</h2> -->
        <hr>
        <div class="tags" v-if="tags.length > 0">
            <router-link v-for="tag of tags" :key="tag.name" :to="tag.path" class="tags__item">
                <div class="tags__item-name" v-text="tag.name"></div> 
                <div class="tags__item-count" v-text="tag.pages.length"></div>
                <div class="tags__item-mask"></div>
            </router-link>
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
}
</script>


<style lang="stylus" scoped>
@require '../styles/config'
.text-center
    text-align center
    font-weight 400

.divider
    color $decorationColor
    padding 0 0.5em

.categories
    display flex
    justify-content space-around
    &__item
        width 200px
        height 80px
        display flex
        justify-content center
        align-items center

.tags
    padding-top 1.5em
    &__item
        margin 10px
        display inline-flex
        border 1px solid $borderColor
        background linear-gradient(120deg, #fff 65%, $readMoreBgColor 0%)
        position relative
        overflow hidden
        
        &-name
            flex 1
            padding 8px 20px
            z-index 2
        &-count
            width 36px
            display flex
            justify-content center
            align-items center
            z-index 2
        &-mask
            position absolute
            background-color $readMoreBgColor
            left 80%
            width 100%
            height 100%
        &:hover
            .tags__item-mask
                animation:maskMotion 300ms forwards;

@keyframes maskMotion {
    0% {
        left 80%
    }

    100% {
        left 0%
    }
}
</style>
