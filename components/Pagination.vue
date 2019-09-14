<template>
<div class="pagination">
    <router-link class="pagination__item" v-for="(page, index) of $pagination._paginationPages" :key="index" :to="page.path">
        {{index+1}}
    </router-link>
</div>
</template>


<script>
export default {
    name: 'Pagination',
    created() {
        console.log(this.$pagination._paginationPages)
    }
}
</script>

<style lang="stylus">
@require '../styles/config'

.pagination
    display flex
    justify-content center

    &__item
        background-color $contentBgColor
        height 50px;
        width 50px;
        line-height 50px;
        text-align center

        &.router-link-exact-active
            background-color $activeColor
            color $contentBgColor
</style>
