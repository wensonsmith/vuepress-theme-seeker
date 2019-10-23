<template>
    <Framework>
        <div class="about">
            <BackButton/>
            <div class="about-content">
                <div class="about-content__left">
                    <div>
                        <img src="/ws-avatar.png"/>
                    </div>
                </div>
                <div class="about-content__right">
                    
                    <div class="friends clearfix">
                        <div class="friends__title">小伙伴</div>
                        <a class="friends__item" href="https://acme.top" target="_blank" title="肆月之风">
                            <svg class="friends__item-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 418.63 333.91"><g><g><path d="M252.75 0h-92.56L0 333.91h91.84L252.75 0zM269.12 26.34L220 125.31l24.56 46.98H196.5l-29.9 63.37h202.91L269.12 26.34zM383.04 262.71l35.59 71.2H118.9l35.59-71.2h228.55z"></path></g></g></svg>
                            <div class="friends__item-link">
                                <div class="title">肆月之风</div>
                                <div class="desc">爱技术、爱分享~</div>
                            </div>
                        </a>

                        <a class="friends__item" href="https://youngxhui.top/links/" target="_blank" title="ISLAND">
                            <img class="friends__item-img" src="https://youngxhui.top/images/me/avatar.png" alt="">
                            <div class="friends__item-link">
                                <div class="title">ISLAND</div>
                                <div class="desc">youngxhui blog</div>
                            </div>
                        </a>
                        <div class="friends__item">
                            <img class="friends__item-img" src="/favicon.ico" alt="">
                            <div class="friends__item-link">
                                <div class="title">小伙伴</div>
                                <div class="desc">欢迎交换友链~</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-detail" style="margin-top: 70vh">
            <Content />
        </div>

        <Comment slot="comment"></Comment>
    </Framework>
</template>

<script>
import Framework from '@theme/components/Framework.vue'
export default {
    components: {
        Framework,
        BackButton: () => import(/* webpackChunkName = "BackButton" */ '@theme/components/BackButton.vue'),
        Comment: () => import(/* webpackChunkName = "CreateTime" */ '@theme/components/Comment.vue'),
    },
}
</script>

<style lang="stylus">
@require '../styles/config';

.about
    position relative
    margin: -3em;

    > .back-button
        position absolute
        top 30px
        left 30px
        color white
        z-index 2

    &-content
        z-index 1
        position absolute
        width 120%
        display flex
        top 0
        left 0
        border-bottom 1px solid $textColorLighter
        
        &__left
            width 30%;
            background-color $codeBgColor
            min-height 50vh
            padding 3em

            > div
                text-align center
        &__right
            flex: 1 0
            display flex
            align-items center


    .friends
        background-color $containerBgColor
        height: 45vh;
        padding: 1em 2em;
        margin-left: -5em;
        overflow scroll

        &__title
            padding 1em 

        &__item
            padding 1em
            background-color white
            width 155px
            height 40px
            margin: 10px
            float left
            display flex
            &-img
                width 40px
            &-link
                margin-left 1em
                overflow hidden
                > .desc
                    font-size 12px
                    line-height 2.5em
                    color $textColorLighter
                
</style>