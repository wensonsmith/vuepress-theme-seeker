<template>
<div :class="['hero', gradient.class]">
    <header class="header">
        <div class="content nav">
            <div class="logo">
                <a href="/" class="logo__image">
                        <img src="~@alias/seeker_logo_white.png" alt="志我">
                    </a>
                <div class="logo__desc">
                    <div class="logo__desc-title">{{$site.title}}</div>
                    <div class="logo__desc-subtitle">{{$site.description}}</div>
                </div>
            </div>
            
            <NavLinks/>
        </div>
    </header>
</div>
</template>

<script>

import Gradients from '../util/gradient'
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

