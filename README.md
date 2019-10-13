# Seeker
> 一款优雅简洁的 Vuepsress 博客主题 / A Vuepress blog theme 

## 🚧 安装 / Install

⚠️ 尚未发布，还不能使用下面命令安装。 可以  git clone 进行使用。

```bash
npm install vuepress-theme-seeker

# or

yarn add vuepress-theme-seeker
```

Modify the `/docs/.vuepress/config.js`

```js
    theme: 'seeker'
```

## 🏁 特性 / Feature
✅ 分类 / Category  
✅ 标签 / Tags  
✅ 归档 / Archive  
✅ 评论 / Comment (Power by [Valine](https://valine.js.org/))  
✅ 社交 / Sociaty Media  
✅ 自定义导航 / Customer Navicate Link  
✅ 文章阅读量 / UV/PU Counter  
✅ 页脚古诗词 / Footer Poetry  
☑️ 文章搜索 / Search   
☑️ 多类型支持 / Type Support: Post, Album, Meme, 
☑️ 文章索引 / Toc   


## 🔧 设置 / Config

配置 `docs/.vupress/config.js`

```js
    title: 'Wenson',                        // 网站名称
    description: '一生为一次发光',           // 网站描述
    markdown: {
        lineNumbers: true,                  // 代码块显示行数
    },
    theme: 'seeker',                       // 设置主题为 seeker
    themeConfig: {
        logo: '/path-to-logo.png',         // 网站 LOGO, 放在 .vuepress/public 下面
        valine: {                          // 请参考  https://valine.js.org/quickstart.html
            appId: '',
            appKey: '',
        },
        // Navicator
        nav: [
            {
                text: '归档'，
                link: '/archive'
            },
            {
                text: '分类',
                link: '/category'
            },
            {
                text: '关于',
                link: '/about'
            },
        ],
        footer: {
            slogan: 'poetry',                   // 页脚古诗词, 'poetry' 随机古诗词，如果填写其他字符串则直接显示所填文字
            copyright: 'vuepress made by wenson',                      // 页底 Copyright
            social: [
                {
                    type: 'qq', // qq, wechat, bilibili, github, rss, weibo
                    value: '', 
                },
                {
                    type: 'wechat', // qq, wechat, bilibili, github, rss, weibo
                    value: '', 
                },
            ]
        },
    }
```



