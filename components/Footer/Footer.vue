<template>
  <div class="footer">
    <div class="footer__container">
      <div class="page-left"></div>
      <div class="page-center">
        <div class="slogan" v-if="dynamicSlogan">
          <div class="poetry__content" v-text="dynamicSlogan.content"></div>
          <span class="poetry__meta">《{{dynamicSlogan.origin.title}}》· <span v-text="dynamicSlogan.origin.author"></span></span>          
        </div>
        <div class="slogan" v-else v-text="slogan"></div>

        <div class="social-icons">
          <i
            class="iconfont"
            v-for="network of social"
            :key="network.type"
            v-html="icons[network.type]"
          ></i>
        </div>
      </div>
      <div class="page-right"></div>
      <div :class="['footer__shadow', gradient.class]"></div>
    </div>
    <div class="footer__copyright" v-text="copyright"></div>
  </div>
</template>

<script>
import Gradients from "@theme/util/gradient";
import Poetry from "@theme/util/poetry";

export default {
  name: "Footer",
  data() {
    return {
      slogan: undefined,
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
    }
  },
  created() {
    const slogan = this.$site.themeConfig.footer.slogan;

    if (slogan === "poetry") {
      return Poetry.todayPoetry().then(poetry => { this.dynamicSlogan = poetry; });
    }

    if (slogan === "yiyan") {
      return;
    }

    this.slogan = slogan;
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