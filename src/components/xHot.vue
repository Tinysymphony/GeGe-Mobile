<template lang="html">
  <div class="hot no-select">
    <p class="title">热门活动</p>
    <div class="m-t-sm p-l-sm p-r-sm fs0 p-r act-wp">
      <x-activity v-for="(item, index) in list" :item="item"></x-activity>
    </div>
  </div>
</template>

<script>
// import img1 from '@assets/hot/h1.jpg'
// import img2 from '@assets/hot/h2.jpg'
// import img3 from '@assets/hot/h3.jpg'
// import img4 from '@assets/hot/h4.jpg'
// import img5 from '@assets/hot/h5.jpg'
import xActivity from '@components/xActivity'
// var list = [{
//   img: img1,
//   id: 3,
//   title: 'Tiny',
//   text: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
// }, {
//   img: img2,
//   id: 4,
//   title: 'Mint',
//   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt '
// }, {
//   img: img3,
//   id: 5,
//   title: 'BNI',
//   text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo '
// }, {
//   img: img4,
//   id: 6,
//   title: 'MTA',
//   text: 'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu f',
//   groupList: [{
//     id: 12,
//     name: 'sdfdsf',
//     desc: 'sdfdsf'
//   }]
// }, {
//   img: img5,
//   id: 7,
//   title: 'U2M',
//   text: 'ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
// }]
export default {
  beforeCreate () {
    this.$store.commit('CLEAR_PAGE')
  },
  data () {
    return {
      // list
    }
  },
  computed: {
    list () {
      return this.$store.state.activityList
    }
  },
  mounted () {},
  methods: {},
  components: {
    xActivity
  }
}
</script>

<style lang="css" scoped>
.hot {
}
.title {
  font-size: 18px;
  padding-left: 10px;
  border-left: 3px solid rgb(28, 221, 186);
}
.act-wp {
}
</style>
