<template lang="html">
  <page :page-name="'detail_page'">
    <x-header slot="header" :title="act.title || '望京WiNe酒会'"></x-header>
    <div class="wp scroller">
      <div class="hd-img">
        <img :src.once="act.img || defaultImg" class="act-img">
      </div>
      <div class="desc p-sm">
          <p class="fs18 main-red"><strong>￥{{act.price || 50 + ~~(Math.random() * 300)}}</strong><span class="black8 fs14"> —— {{act.num || ~~(Math.random() * 100)}} 人已经参加</span></p>
        {{act.text || text}}
      </div>
      <div class="op p-sm">
        <router-link to="/pay/123" class="btn btn-primary fs18 block buy-btn">购票报名</router-link>
      </div>
    </div>
    <x-footer slot="footer"></x-footer>
  </page>
</template>

<script>
import Page from '@components/Page'
import xHeader from '@components/xHeader'
import xFooter from '@components/xFooter'
import defaultImg from '@assets/banner/b1.png'
var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export default {
  beforeCreate () {
    this.$store.dispatch('getActivityDetail', this.$route.params.id).then(data => {
      this.act = data || {}
      this.$store.commit('SET_ACT_ID', this.act.id || 0)
    })
  },
  data () {
    return {
      act: {},
      text,
      defaultImg
    }
  },
  components: {
    Page,
    xHeader,
    xFooter
  }
}
</script>

<style lang="css" scoped>
.act-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.buy-btn {
  width: 70%;
  margin: 15px auto 0 auto;
  line-height: 40px;
}
</style>
