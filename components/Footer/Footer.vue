<template>
  <div :class="['footer', gradient.class]">
    <div class="footer-top">
        <div class="footer-top__left"></div>
      <div class="content">
        <div class="slogan" v-if="slogan" v-text="slogan"></div>
        <div class="slogan" v-else-if="poetry">
          <span  v-text="poetry.content"></span>
          BY
          <span v-text="poetry.origin.author"></span>
        </div>
        <div class="social-icons">
          <img v-for="network of social" :key="network.type" :src="icons[network.type]" :alt="network.type">
        </div>
        
      </div>
      <div class="footer-top__right"></div>
    </div>
      <section class="footer__bottom">
        <div class="">
          <div class="footer__card">
          </div>
          <div class="footer__nav"></div>
          <div class="footer__copy">
            <div class="copyright" v-if="copyright">{{copyright}}</div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import Gradients from '@theme/util/gradient'
import qq from '@theme/public/images/icons/qq.png'
import bilibili from '@theme/public/images/icons/bilibili.png'
import github from '@theme/public/images/icons/github.png'
import rss from '@theme/public/images/icons/rss.png'
import wechat from '@theme/public/images/icons/wechat.png'
import weibo from '@theme/public/images/icons/weibo.png'


export default {
  name: "Footer",
  data() {
    return {
      poetry: undefined,
      icons: {
        qq,
        bilibili,
        github,
        rss,
        wechat,
        weibo,
      }
    };
  },
  computed: {
    slogan() {
      return this.$site.themeConfig.footer.slogan || this.todayPoetry();
    },
    copyright() {
      return this.$site.themeConfig.footer.copyright
    },
    gradient() {
      return Gradients.className
    },
    social() {
      console.log(this.$site.themeConfig.footer)
      return this.$site.themeConfig.footer.social || []
    }
  },
  methods: {
    fetchToken() {
      return fetch("https://v2.jinrishici.com/token")
        .then(data => {
          return data.json();
        })
        .then(response => {
          window.localStorage.setItem("SEEKER_POETRY_TOKEN", response.data);
          Promise.resolve(response.data);
        });
    },
    todayPoetry() {
      let token = window.localStorage.getItem("SEEKER_POETRY_TOKEN");
      if (token) {
        this.fetchPoetry(token);
      } else {
        this.fetchToken().then(token => {
          this.fetchToken(token);
        });
      }
    },
    fetchPoetry(token) {
      fetch(
        "https://v2.jinrishici.com/one.json?X-User-Token=" +
          encodeURIComponent(token)
      )
        .then(data => {
          return data.json();
        })
        .then(response => {
          this.poetry = response.data;
        });
    }
  },
};
</script>

<style lang="stylus">
@require '../../styles/config'
  
.footer
  &-top
    display: flex
    min-height: 30px
    &__left
      flex: 1
      background-color: rgba(255,255,255,0.7)
    > .content
      padding 0
      display: flex
      background-color: rgba(255,255,255,0.7)
      .slogan
        flex 1
        line-height: 60px;
      .social-icons
        flex 1
        text-align right
        justify-content: flex-end
        height 60px
        img 
          height 30px
          margin 15px 10px
    &__right
      flex: 1
      background-color: rgba(255,255,255,0.7)
      
  &__bottom
    // background-color darken($footerBgColor, 10%)
    min-height: 150px
    text-align center
    position relative
    background-color: rgba(38, 54, 71, 0.6)
    padding: 50px 0
</style>

