<template lang="html">
  <page :page-name.once="'pay_page'">
    <x-header slot="header" :title.once="'支付页面'" :back-url.once="'/detail/' + id"></x-header>
    <div class="wp scroller no-select">
      <section class="pay-sec panel">
        <p class="t-c fs20 m-b-lg">共需支付 <span class="main-red fs30">{{50 + ~~(Math.random() * 300)}}</span> 元</p>
        <input type="radio" id="gg" v-model="pay" value="0">
        <label class="label gg-label" for="gg">鸽鸽钱包<del class="fs16 black10 m-l-sm">好用不贵，秒杀马云爹</del></label><br/>
        <input type="radio" id="mt" v-model="pay" value="1">
        <label class="label" for="mt">美团支付<del class="fs16 black10 m-l-sm">友情兹瓷</del></label><br/>
        <input type="radio" id="ali" v-model="pay" value="2">
        <label class="label" for="ali">支付宝</label><br/>
        <input type="radio" id="wx" v-model="pay" value="3">
        <label class="label" for="wx">微信支付</label><br/>
        <router-link to="/success" class="btn btn-primary fs18 pay-btn block">支 付</router-link>
      </section>
    </div>
    <x-footer slot="footer"></x-footer>
  </page>
</template>

<script>
import Page from '@components/Page'
import xHeader from '@components/xHeader'
import xFooter from '@components/xFooter'
export default {
  data () {
    return {
      pay: 0
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  mounted () {},
  methods: {},
  components: {
    Page,
    xHeader,
    xFooter
  }
}
</script>

<style lang="css" scoped>
.gg-label {
  color: rgb(185, 11, 0);
}
.label {
  font-size: 20px;
  margin-left: 10px;
}
.pay-sec {
  line-height: 40px;
}
.pay-btn {
  margin: 20px auto 0 auto;
}
</style>
