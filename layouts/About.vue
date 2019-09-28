<template>
    <Framework>
        <BackButton/>
        <h1>关于我</h1>
        <br/>
    </Framework>
</template>

<script>
import Framework from '@theme/components/Framework.vue'
export default {
    components: {
        Framework,
        CreateTime: () => import(/* webpackChunkName = "CreateTime" */ '@theme/components/CreateTime.vue'),
        BackButton: () => import(/* webpackChunkName = "BackButton" */ '@theme/components/BackButton.vue'),
    },
}
</script>