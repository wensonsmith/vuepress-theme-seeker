<template>
  <span class="article-createtime">{{dateString}}</span>
</template>

<script>
export default {
  name: "CreateTime",
  props: {
    datetime: {
      type: String
    },
    showTime: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    dateString() {
      const formatted = this.datetime.replace('T', ' ').substr(0, 19).replace(/-/g, "/")
      return this.datetime ? this.friendlyTime(new Date(formatted)) : 'lost time'
    }
  },
  methods: {
    friendlyTime(date) {
      // Make a fuzzy time
      let delta = Math.round((+new Date() - date) / 1000)

      let minute = 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7

      let fuzzy

      if (delta < 30) {
        fuzzy = "刚刚."
      } else if (delta < minute) {
        fuzzy = delta + " 秒前."
      } else if (delta < 2 * minute) {
        fuzzy = "一分钟前."
      } else if (delta < hour) {
        fuzzy = Math.floor(delta / minute) + " 分钟前."
      } else if (Math.floor(delta / hour) == 1) {
        fuzzy = "一小时前."
      } else if (delta < day) {
        fuzzy = Math.floor(delta / hour) + " 小时前."
      } else if (delta < day * 2) {
        fuzzy = "昨天"
      } else {
        const ISOString = date.toISOString()
        fuzzy = ISOString.slice(0, 10)
        if (this.showTime) {
          fuzzy += ' ' + ISOString.substr(11, 8)
        }
      }

      return fuzzy
    }
  }
};
</script>
