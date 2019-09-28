// Merge a `source` object to a `target` recursively
const merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object  && key in target) Object.assign(source[key], merge(target[key], source[key]))
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  const defaultThemeConfig = {
    lastUpdated: '最后更新',
    footer: {
      slogan: 'poetry',
      copyright: 'vuepress theme seeker @ 2019'
    },
  }

  const mergedConfig = merge(defaultThemeConfig, siteData.themeConfig)

  Object.assign(siteData.themeConfig, mergedConfig)
}