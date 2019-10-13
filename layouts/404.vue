<template>
  <div class="container">
    <div class="not-found">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <br/>
      <br/>
      <router-link to="/" class="home">Take me home</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这是一片不毛之地.`,
  `我们是怎么过来的?`,
  `这是404.`,
  `貌似发现了一个不存在的页面.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus">
.not-found
  width 60%
  margin 10em auto
.home
  margin-top 1em
  padding 1em
  background-color #6dff9a 
  cursor pointer
  &:hover
    color black
</style>