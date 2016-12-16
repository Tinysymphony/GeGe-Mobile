<template lang="html">
  <div class="banner retina-1px-border-bottom retina-1px-border-top no-select">
    <div id="J-slider" class="swipe" v-if="bannerList.length">
      <div class="swipe-wrap fs0">
        <div v-for="img in bannerList"><img :src="img"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swipe from '@lib/swipe'
import b1 from '@assets/banner/b1.png'
import b2 from '@assets/banner/b2.png'
import b3 from '@assets/banner/b3.png'
import b4 from '@assets/banner/b4.png'
var bannerList = [b1, b2, b3, b4]
export default {
  data () {
    return {
      bannerList
    }
  },
  mounted () {
    window.requestAnimationFrame(() => {
      Swipe(document.getElementById('J-slider'), {
        speed: 300,
        auto: 3000,
        continuous: true,
        disableScroll: false
      })
    })
  }
}
</script>

<style lang="css" scoped>
.banner {
  position: relative;
  width: 100%;
}
.banner::after, .banner::before {
  width: calc(100% - 20px);
  left: 10px;
}
.title {
  font-size: 18px;
  padding-left: 10px;
  border-left: 3px solid rgb(255, 76, 19);
}
.swipe {
  margin-top: 8px;
  width: 100%;
  /*padding: 10px 0;*/
  padding-top: 10px 0;
  height: 220px;
  top: 0;
  left: 0;
  overflow: hidden;
}
.swipe-wrap {
  margin-top: 10px;
  overflow:hidden;
  position:relative;
  height:100%;
  max-height:100%;
}
.swipe-wrap > div {
  float:left;
  width:100%;
  height:100%;
  max-height:100%;
  position:relative;
  text-align:center;
}
.swipe img {
  width: 92%;
  height: 200px;
  border: 4px solid white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.29);
  object-fit: cover;
}
</style>
