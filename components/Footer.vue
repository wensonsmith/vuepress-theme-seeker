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

        <div class="copyright" v-if="copyright">{{copyright}}</div>
      </div>
      <div class="footer-top__right"></div>
    </div>
    <div class="footer-bottom">
        <div class="social-icons"></div>
        <div class="theme-info"> Vuepress theme <a href="" target="__blank">Seeker</a> | Make with <span>💚</span> by <a href="" target="__blank">Wenson</a></div>
    </div>
  </div>
</template>

<script>
import Gradients from '../util/gradient'
export default {
  name: "Footer",
  data() {
    return {
      poetry: undefined
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
      console.log(token);
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
          console.log(response);
          this.poetry = response.data;
        });
    }
  }
};
</script>

