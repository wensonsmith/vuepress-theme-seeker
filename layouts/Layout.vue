<template>
  <Framework>
    <PostList />
    <Pagination prev-text="上一页" next-text="下一页" slot="pagination"/>
  </Framework>
</template>

<script>
import Framework from '@theme/components/Framework.vue'
import PostList from '@theme/components/PostList.vue'

export default {
  name: "Layout",
  components: {
    Framework,
    PostList,
    Pagination: () => import(/* webpackChunkName = "Pagination" */ '@theme/components/Pagination.vue'),
  },
};
</script>

