module.exports = (themeConfig, ctx) => {

  const pagination = {
    lengthPerPage: 10,
  }

  const blogOptions = {
    directories: [
      {
        id: 'post',
        dirname: 'posts',
        path: '/',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        itemPermalink: '/:year/:month/:day/:slug',
        frontmatter: { title: '首页' },
      },
    ],
    frontmatters: [
      {
        id: "tags",
        keys: ['tags'],
        path: '/tags/',
        //layout: 'Tags',  //defaults to `FrontmatterKey.vue`
        frontmatter: { title: '分类检索文章' },
      },
      {
        id: "categories",         // 再 Vue 实例中的名称
        keys: ['category'],
        path: '/categories/',
        //layout: 'Categories',  //defaults to `FrontmatterKey.vue`
        frontmatter: { title: '分类检索文章' },
      },
    ]
  }

  const plugins = [
    ['@vuepress/medium-zoom', true],
    ['@vuepress/blog', blogOptions],
    ['@vuepress/last-updated']
  ]

  const config = {
    plugins
  }

  return config
}