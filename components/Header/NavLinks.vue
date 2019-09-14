<template>
<nav class="nav-links" v-if="userLinks.length">
    <!-- user links -->
    <div class="nav-links__item" v-for="item in userLinks" :key="item.link">
        <DropdownLink v-if="item.type === 'links'" :item="item" />
        <NavLink v-else :item="item" />
    </div>
</nav>
</template>

<script>
import DropdownLink from './DropdownLink.vue'
import { resolveNavLinkItem } from '@theme/util'
import NavLink from './NavLink.vue'

export default {
    components: {
        NavLink,
        DropdownLink
    },

    computed: {
        userNav() {
            return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
        },

        nav() {
            const { locales } = this.$site
            if (locales && Object.keys(locales).length > 1) {
                const currentLink = this.$page.path
                const routes = this.$router.options.routes
                const themeLocales = this.$site.themeConfig.locales || {}
                const languageDropdown = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    items: Object.keys(locales).map(path => {
                        const locale = locales[path]
                        const text = themeLocales[path] && themeLocales[path].label || locale.lang
                        let link
                        // Stay on the current page
                        if (locale.lang === this.$lang) {
                            link = currentLink
                        } else {
                            // Try to stay on the same page
                            link = currentLink.replace(this.$localeConfig.path, path)
                            // fallback to homepage
                            if (!routes.some(route => route.path === link)) {
                                link = path
                            }
                        }
                        return { text, link }
                    })
                }
                return [...this.userNav, languageDropdown]
            }
            return this.userNav
        },

        userLinks() {
            let userLinks =  (this.nav || []).map(link => {
                return Object.assign(resolveNavLinkItem(link), {
                    items: (link.items || []).map(resolveNavLinkItem)
                })
            })
            return userLinks;
        },
    }
}
</script>

<style lang="stylus">
.nav-links
  display:flex;
  float: right;
  align-items: center;

  &__item
    text-align: center;
    color: white;
    margin-right: 50px;
</style>
