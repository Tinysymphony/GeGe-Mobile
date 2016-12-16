<template lang="html">
  <router-link :to="'/detail/' + item.id" class="activity fs0 black6" v-fall="calcOption">
    <div class="img-wp">
      <img :src="item.img" class="img"
        @load="onLoad"
        @error="onError">
    </div>
    <div class="text-wp p-xs">
      <h3 class="fs16 act-title">{{item.title}}</h3>
      <p class="fs14 black9 act-text">{{item.text}}</p>
    </div>
  </router-link>
</template>

<script>
import defaultImg from '@assets/icon/default.svg'
import fallDirective from '@directives/fallDirective'
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      defaultImg,
      calcOption: {
        isFinish: false,
        isError: false
      }
    }
  },
  computed: {},
  mounted () {},
  methods: {
    onLoad () {
      this.calcOption = {...this.calcOption, isFinish: true}
    },
    onError () {
      this.calcOption = {...this.calcOption, isError: true}
    }
  },
  components: {},
  directives: {
    fallDirective
  }
}
</script>

<style lang="css" scoped>
.activity {
  width: 150px;
  position: absolute;
  margin: 10px 0;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.17);
  border-radius: 5px;
}
.img {
  width: 150px;
}
.text-wp {
  background: #fff;
}
.act-title {
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
.act-text {
  margin-top: 8px;
}
</style>
