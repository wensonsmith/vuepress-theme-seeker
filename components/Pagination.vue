<template>
<div class="pagination" v-if="length > 1">
    <router-link class="pagination__item" v-for="(page, index) of pagination" :key="index" :to="page.path">
        {{index+1}}
    </router-link>
</div>
</template>


<script>
export default {
    name: 'Pagination',
    computed: {
        pagination() {
            return this.$pagination._paginationPages
        },
        length() {
            return this.$pagination.length
        }
    },
}
</script>

<style lang="stylus">
@require '../styles/config'

.pagination
    position absolute
    bottom 0px
    left -101px
    display flex
    align-items flex-end
    flex-direction column

    &__item
        background-color $contentBgColor
        height 50px;
        width 50px;
        line-height 50px;
        text-align center
        display block
        font-weight bold

        &.router-link-exact-active
            background-color $accentColor
            color $contentBgColor
            width 100px
</style>
