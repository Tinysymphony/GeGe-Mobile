<template lang="html">
  <div class="hd fs0">
    <div class="hd-normal no-select" v-if="!search">
      <template v-if="!title">
        <div class="icon">
          <img :src="fire" class="fire-icon">
        </div>
        <div class="search" @click="showSearch">
          <p class="fs14 black10">寻找感兴趣的活动</p>
        </div>
      </template>
      <template v-else>
        <router-link :to="backUrl || '/'" class="icon">
          <img :src="back" class="fire-icon">
        </router-link>
        <div class="act-title fs20"> {{title || '望京酒会'}} </div>
      </template>
      <div class="icon">
        <img :src="params" class="config-icon">
      </div>
    </div>
    <div class="hd-search" v-else>
      <div class="icon no-select">
        <img :src="close" class="fire-icon" @click="closeSearch">
      </div>
      <div class="search-area fs20">
        <div class="input-group">
          <label for="address" class="no-select">地址</label>
          <input type="text" name="adress" placeholder="想在哪儿约?" class="address-input input">
        </div>
        <div class="input-group">
          <label for="time" class="no-select">时间</label>
          <input type="text" name="time" placeholder="良辰吉日" class="time-input input">
        </div>
        <div class="input-group no-select">
          <label for="type">类型</label>
          <div class="type-selector">
            <span class="x-type">酒会</span>
            <span class="x-type">设计展</span>
            <span class="x-type">电影</span>
            <span class="x-type">读书会</span>
            <span class="x-type">唱歌</span>
            <span class="x-type">压马路</span>
          </div>
        </div>
      </div>
      <div class="m-t-lg t-c no-select">
        <div class="btn btn-primary fs20 search-btn">搜 索</div>
      </div>
    </div>
  </div>
</template>

<script>
import fire from '@assets/icon/fire.svg'
import back from '@assets/icon/back.svg'
import close from '@assets/icon/close.svg'
import params from '@assets/icon/params.svg'
export default {
  data () {
    return {
      fire,
      back,
      close,
      params,
      search: false
    }
  },
  props: {
    title: {
      type: String
    },
    backUrl: {
      type: String
    }
  },
  computed: {},
  mounted () {},
  methods: {
    showSearch () {
      this.search = true
    },
    closeSearch () {
      this.search = false
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.hd {
  text-align: center;
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 100;
  width: 100%;
}
.hd-normal {
  height: 54px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.09);
  animation: fadeIn .2s ease-in-out;
}
.hd-search {
  text-align: left;
  height: 100vh;
  background: #fff;
  animation: popup .2s ease-in-out;
  z-index: 200;
}
.search {
  vertical-align: 10px;
  margin-top: 8px;
  display: inline-block;
  width: calc(100% - 50px - 50px);
  height: 32px;
  line-height: 32px;
  background-color: rgba(230, 230, 236, 0.69);
  border-radius: 40px;
}
.act-title {
  vertical-align: 8px;
  display: inline-block;
  width: calc(100% - 50px - 50px);
  height: 54px;
  line-height: 54px;
}
.icon {
  text-align: center;
  display: inline-block;
  width: 50px;
}
.fire-icon, .config-icon{
  margin-top: 12px;
  width: 30px;
}
.search-area {
  padding: 40px 15px 0;
}
.input {
  display: block;
  font-size: 18px;
  height: 40px;
  width: 100%;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.input-group {
  margin: 20px 0;
}
.search-btn {
  padding: 5px 100px;
}
.x-type {
  display: inline-block;
  padding: 5px;
  margin: 5px 0;
  color: #999;
  border-radius: 5px;
  border: 1px dashed #eee;
}
</style>
