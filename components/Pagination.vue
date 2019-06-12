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
