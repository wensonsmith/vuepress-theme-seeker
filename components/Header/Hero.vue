<template>
<div :class="['hero', gradient.class]">
    <header class="header">
        <div class="content nav">
            <router-link to="/" class="logo">
                <div class="logo__image">
                    <img v-if="$site.themeConfig.logo" :src="$withBase($site.themeConfig.logo)" alt="wenson-logo">
                </div>
                <div class="logo__desc">
                    <div class="logo__desc-title">{{$site.title}}</div>
                    <div class="logo__desc-subtitle">{{$site.description}}</div>
                </div>
            </router-link>
            
            <NavLinks/>
        </div>
    </header>
</div>
</template>

<script>

import Gradients from '@theme/util/gradient'
import NavLinks from './NavLinks.vue'
export default {
    computed: {
        categories() {
            return this.$categories.list
        },
        gradient() {
            return Gradients.random()
        }
    },
    components: {
        NavLinks
    }
}
</script>

<style lang="stylus">
@require '../../styles/config'
    
.hero
  height $heroHeight
  min-height $heroHeight

.logo
  display  flex
  align-items center

  &__image
    width  70px
    margin-right  10px
    margin-bottom -10px
    > img {
      width  100%
    }
  &__desc
    color  white
    padding-top  5px
    &-title
      font-size  2em
      padding: 0.5rem 0
      opacity 0.9
    &-subtitle
      font-size 14px
      opacity 0.8


.nav
  display  flex
  justify-content  space-between    
  height $navHeight

</style>