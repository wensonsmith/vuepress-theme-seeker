<template>
    <Framework>
        <BackButton/>
        <h1>归档</h1>
        <br/>
        <div v-for="year of Object.keys(archive).reverse()" :key="year">
            <h3 v-text="year"></h3>
            <p v-for="post of archive[year]" :key="post.key" >
                <router-link class="archive-post" :to="post.path">
                    <CreateTime :datetime="post.frontmatter.date || post.lastUpdated"/>
                    <span class="divider">/</span>
                    <span v-text="post.title"></span>
                </router-link>
            </p>
        </div>
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
    computed: {
        archive() {
            let posts = {}
            this.$site.pages.sort((a, b) => {
                return a.frontmatter.date < b.frontmatter.date ? 1 : -1
            })
            this.$site.pages.forEach(post => {
                if (post.id && post.id === 'post') {
                    let date = this.calculateDate(post)
                    const year = date.getFullYear()
                    const month = date.getMonth()
                    if (posts[year] === undefined) {
                        posts[year] = []
                    }

                    posts[year].push(post)
                }
            });

            
            return posts
        }
    },
    methods: {
        calculateDate(post) {
            if (post.frontmatter.date) {
                let date = new Date(post.frontmatter.date)
                return date
            }

            return new Date();
        }
    }
}
</script>

<style lang="stylus">
@require '../styles/config'
.divider
    color $decorationColor
    padding 0 5px
.archive-post
    animation hoverMotionReverse 300ms forwards
    &:hover
        animation hoverMotion 300ms forwards

@keyframes hoverMotion {
    from {
        margin-left 0
    }
    to {
        margin-left 1em
    }
}

@keyframes hoverMotionReverse {
    from {
        margin-left 1em
    }
    to {
        margin-left 0
    }
}
</style>