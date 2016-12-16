<template lang="html">
  <div class="retina-1px-border-top ft fs0 no-select">
    <template v-if="!admin">
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
    </template>
    <template v-else>
      <div class="a-item" :class="{'active': current === 1}" @click="changeStatus(1)">
        <img :src="actImg" class="ft-item-img">
        <p class="ft-item-text">活动管理</p>
      </div>
      <div class="a-item" :class="{'active': current === 2}" @click="changeStatus(2)">
        <img :src="msgImg" class="ft-item-img">
        <p class="ft-item-text">群组管理</p>
      </div>
    </template>
  </div>
</template>

<script>
import homeImg from '@assets/icon/shop.svg'
import orderImg from '@assets/icon/calendar.svg'
import profileImg from '@assets/icon/user.svg'
import msgImg from '@assets/icon/msg.svg'
import actImg from '@assets/icon/megaphone.svg'
export default {
  data () {
    return {
      homeImg,
      orderImg,
      profileImg,
      actImg,
      msgImg
    }
  },
  props: {
    admin: {
      type: [String, Number, Boolean]
    },
    current: {
      type: Number,
      default: 1
    },
    changeStatus: {
      type: Function,
      deufalt: () => {}
    }
  },
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
.a-item {
  display: inline-block;
  width: 50%;
  height: 100%;
  text-align: center;
}
.a-item:first-child {
  border-right: 1px solid rgba(0, 0, 0, 0.14);
}
.a-item.active {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.10) inset;
  background-color: rgb(237, 247, 247);
}
</style>
