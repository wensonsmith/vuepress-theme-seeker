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
                    
                    <div class="friends clearfix" >
                        <div class="friends__title">小伙伴</div>
                        <a class="friends__item" 
                            v-for="(friend,index) of friends" 
                            :key="index" :href="friend.link" 
                            target="_blank" 
                            :title="friend.name"
                            >
                            <img :src="friend.avatar" class="friends__item-img"/>
                            <div class="friends__item-link">
                                <div class="title" v-text="friend.name"></div>
                                <div class="desc" v-text="friend.desc"></div>
                            </div>
                        </a>
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
    computed: {
        friends() {
            return this.$page.frontmatter.friends
        }
    },
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
        max-width: 900px;

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