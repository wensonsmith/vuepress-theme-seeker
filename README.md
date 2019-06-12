# Seeker
Vuepress blog theme

## install

```bash
npm install vuepress-theme-seeker

# or

yarn add vuepress-theme-seeker
```

Modify the `/docs/.vuepress/config.js`

```js
    theme: 'seeker'
```

## Feature
[] Category  
[] Tags  
[] Archive  
[] Comment (Power by [Valine](https://valine.js.org/))  
[] GA Support  
[] Sociaty Media  
[] Search    
[X] Customer Navicate Link  
[] Toc  
[] UV/PU Counter  
[] Type Support: Post, Album, Meme,   
[] Footer Poetry  


## Config
- 样式
  - 背景色
  - 高亮色
  - 分页样式
    - SIMPLE
    - NUMBER
- 网站基础
  - LOGO
  - 网站名称
  - 标语
- 页脚
  - COPYRIGHT
  - 标语/诗词
- GA配置
- Frontmatter 配置
- 评论设置
- 社交媒体
  - 微博
  - 微信
  - GITHUB
  - TWTTER
  - FACEBOOK



```js
    title: '思客',
    description: '多思考才能变更好',
    logo: '@assets/path-to-logo.png',
    theme: 'seeker',
    themeConfig: {
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
                text: '标签',
                link: '/tags'
            },
            {
                text: 'Github',
                link: 'https://github.com/wensonsmith'
            },
        ],
        style: {
            //背景色
            gradients: [],
            //选中高亮颜色
            hightlight: '#F2F4F6',
            //分页样式
            pagination: ''
        },
        footer: {
            poetry: false,
            copyright: '',
        },
        sociaty: {
            wechat:
            weibo:
            github:
            twitter:
            facebook:
        },
        ga: {

        },


    }
```



