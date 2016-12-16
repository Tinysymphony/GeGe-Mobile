<template lang="html">
  <page :page-name="'detail_page'">
    <x-header slot="header" :title="'支付结果'" :return="'/'"></x-header>
    <div class="wp scroller">
      <section class="panel t-c">
        <p> <img :src="like"> </p>
        <p class="fs30 main-red m-t-sm"><i>支付成功</i></p>
        <div class="t-l fs16 black6 m-t-md order-info">
          <p>单号：12312312</p>
          <p>活动：望京WiNe酒会</p>
          <p>时间：2016/12/22 20:00</p>
          <p>地点：恒电大厦B座成都厅</p>
          <p>已支付：<strong class="main-red">140元</strong></p>
        </div>
      </section>
      <section class="panel t-c">
        <p class="fs20 black3 m-b-md">推荐活动群组</p>
        <a :href="'facechat://groupinfo.start?groupId=' + item.id" v-for="item in groupList" class="g-item t-l block">
          <div class="g-img">
            <img :src="item.img || 'http://7xjgb0.com1.z0.glb.clouddn.com/txa.png'">
          </div>
          <div class="g-name fs20 black5 m-l-sm">{{item.groupName}}</div>
          <span class="f-r black9">{{item.num || 5}} 人已加入</span>
        </a>
      </section>
    </div>
    <x-footer slot="footer"></x-footer>
  </page>
</template>

<script>
import Page from '@components/Page'
import xHeader from '@components/xHeader'
import xFooter from '@components/xFooter'
import like from '@assets/icon/likeRed.svg'
var groupList = [{
  groupName: 'Gay组',
  id: 123,
  img: ''
}, {
  groupName: 'Les组',
  id: 124,
  img: 'http://7xjgb0.com1.z0.glb.clouddn.com/mm.png'
}, {
  groupName: 'Mint组',
  id: 126,
  img: 'http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-2@2x.png'
}]
export default {
  data () {
    return {
      like,
      groupList
    }
  },
  computed: {},
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
.order-info {
  line-height: 30px;
}
.g-item {
  line-height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
}
.g-item:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}
.g-img, .g-name {
  display: inline-block;
  vertical-align: middle;
}
.g-img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  overflow: hidden;
}
.g-img img {
  width: 40px;
}
</style>
