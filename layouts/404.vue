<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
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

<style src="../styles/index.styl" lang="stylus"></style>