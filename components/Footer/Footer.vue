<template>
  <div class="footer">
    <div class="footer__container">
      <div class="page-left"></div>
      <div class="page-center">
        <div class="slogan" v-if="slogan" v-text="slogan"></div>
        <div class="slogan" v-if="dynamicSlogan">
          <div class="poetry__content" v-text="dynamicSlogan.content"></div>
          <span class="poetry__meta">《{{dynamicSlogan.origin.title}}》· <span v-text="dynamicSlogan.origin.author"></span></span>          
        </div>
        <div class="social-icons">
          <a :href="network.value" v-for="network of social" :key="network.type" target="_blank">
            <i class="iconfont" v-html="icons[network.type]"></i>
          </a>
        </div>
      </div>
      <div class="page-right"></div>
      <div :class="['footer__shadow', gradient.class]"></div>
    </div>
    <div class="footer__copyright" ><span v-text="copyright"></span> | Powered by Vuepress | Theme <a target="_blank" href="https://github.com/wensonsmith/vuepress-theme-seeker">Seeker</a></div>
  </div>
</template>

<script>
import Gradients from "@theme/util/gradient";

export default {
  name: "Footer",
  data() {
    return {
      dynamicSlogan: undefined,
      icons: {
        qq: "&#xf216;",
        bilibili: "&#xe6b4;",
        github: "&#xe741;",
        rss: "&#xe6ee;",
        wechat: "&#xe759;",
        weibo: "&#xe62d;"
      }
    };
  },
  computed: {
    copyright() {
      return this.$site.themeConfig.footer.copyright;
    },
    gradient() {
      return Gradients.className;
    },
    social() {
      return this.$site.themeConfig.footer.social || [];
    },
    slogan() {
      const slogan = this.$site.themeConfig.footer.slogan;
      if (slogan === "poetry") {
        this.todayPoetry();
        return false;
      }

      if (slogan === "yiyan") {
        return false;
      }

      return slogan;
    }
  },
  methods: {
    fetchToken() {
        return fetch("https://v2.jinrishici.com/token").then(data => {
            return data.json();
        }).then(response => {
            window.localStorage.setItem("SEEKER_POETRY_TOKEN", response.data);
            return Promise.resolve(response.data);
        });
    },
    todayPoetry() {
        let token = window.localStorage.getItem("SEEKER_POETRY_TOKEN");
        if (token) {
            return this.fetchPoetry(token);
        } else {
            return this.fetchToken().then(token => {
                return this.fetchPoetry(token);
            });
        }
    },
    fetchPoetry(token) {
        fetch(
            "https://v2.jinrishici.com/one.json?X-User-Token=" +
            encodeURIComponent(token)
        ).then(data => {
            return data.json();
        }).then(response => {
            this.dynamicSlogan = response.data;
        });
    }
  }
};
</script>

<style lang="stylus">
@require '../../styles/config';

.footer
  &__container
    position: relative;
    display: flex;

    > .page-left
      background-color: white;
      z-index: 2;

    > .page-center
      background-color: white;
      z-index: 2;
      min-height: 150px;
      padding: 3em;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content space-between

      .poetry__content
        font-size 1.3em
        line-height 2.5em

      .poetry__meta
        color $textColorLighter;
        font-size 13px

    > .page-right
      background-color: $containerBgColor;

  &__copyright
    font-size: 12px;
    color: $textColorLighter;
    text-align: center;
    padding: 80px 0 20px 0;
    background-color: $containerBgColor;

  &__shadow
    width: 85%;
    position: absolute;
    min-height: 150px;
    padding: 3em;
    left: 0px;
    bottom: -45px;
    background-color: #f87654;

  .social-icons
    .iconfont
      font-size 1.5em
      margin-left 1em
      color $textColor

</style>