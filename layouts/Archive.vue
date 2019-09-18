<template>
    <Framework>
        <h1>归档</h1>
        <div v-for="year of Object.keys(archive).reverse()" :key="year">
            <h3 v-text="year"></h3>
            <p v-for="post of archive[year]" :key="post.key" >
                
                <router-link :to="post.path">
                    <CreateTime :datetime="post.frontmatter.date || post.lastUpdated"/>
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
            console.log('posts', posts)
        }
    },
    created() {
        console.log(this)
    },
    methods: {
        calculateDate(post) {
            if (post.frontmatter.date) {
                let date = new Date(post.frontmatter.date)
                console.log(date.getFullYear())
                return date
            }

            return new Date();
        }
    }
}
</script>

