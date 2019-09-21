<template>
    <button class="back-button" @click="$router.go(-1)">返回</button>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.back-button
    border none
    font-size 14px
    background url(../public/images/icons/right-arrow.svg) no-repeat 0 0;
    width 100px;
    display inline-block
    height 30px;
    background-size contain
    cursor pointer
    outline:none;
</style>