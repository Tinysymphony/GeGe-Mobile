<!--
 - @file [页面级组件] 首页
 - @date 2016-11-20
 - @author TinySymphony (zjutiny@gmail.com)
 - @desc undefined
 - @name HomePage.vue
 -->

<template lang="">
  <page :page-name="'page_home'">
    <x-header slot="header"></x-header>
    <div class="wp scroller">
      <x-banner></x-banner>
      <x-recommend></x-recommend>
      <x-hot></x-hot>
    </div>
    <x-footer slot="footer"></x-footer>
  </page>
</template>

<script>
import Page from '@components/Page'
import xHeader from '@components/xHeader'
import xFooter from '@components/xFooter'
import xBanner from '@components/xBanner'
import xRecommend from '@components/xRecommend'
import xHot from '@components/xHot'
export default {
  beforeCreate () {
    this.dispatch('getActivity')
  },
  components: {
    Page,
    xHeader,
    xFooter,
    xBanner,
    xRecommend,
    xHot
  }
}
</script>

<style scoped>
.wp {
  padding: 64px 0 60px 0;
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  min-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
