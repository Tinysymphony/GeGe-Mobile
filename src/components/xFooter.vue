<template lang="html">
  <div class="retina-1px-border-top ft fs0 no-select">
    <router-link to="/" class="ft-item">
      <img :src="homeImg" class="ft-item-img">
      <p class="ft-item-text">首页</p>
    </router-link>
    <router-link to="/" class="ft-item">
      <img :src="orderImg" class="ft-item-img">
      <p class="ft-item-text">行程</p>
    </router-link>
    <router-link to="/" class="ft-item">
      <img :src="profileImg" class="ft-item-img">
      <p class="ft-item-text">我的</p>
    </router-link>
  </div>
</template>

<script>
import homeImg from '@assets/icon/shop.svg'
import orderImg from '@assets/icon/calendar.svg'
import profileImg from '@assets/icon/user.svg'
export default {
  data () {
    return {
      homeImg,
      orderImg,
      profileImg
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
.ft {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 55px;
  background: rgba(255, 255, 255, 0.84);
  z-index: 100;
}
.ft-item {
  text-align: center;
  display: inline-block;
  width: 33.3%;
  height: 100%;
}
.ft-item-img {
  margin-top: 10px;
  width: 24px;
}
.ft-item-text {
  color: #555;
  margin-top: 3px;
  font-size: 12px;
}
</style>
