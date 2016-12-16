<template lang="html">
  <div class="recommend no-select">
    <p class="title">猜你想约
      <span class="more fs14">查看更多</span>
    </p>
    <div class="poster-container">
      <div class="poster-wp fs0" :style="{'width': list.length * 55 + 'vw'}">
        <div class="poster-item" v-for="item in list">
          <img :src="item.img" class="poster">
          <div class="poster-text">
            <strong class="fs20 main-red">￥{{item.price}}</strong>
            <span class="fs14 m-l-xs">{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import r1 from '@assets/recommend/r1.png'
import r2 from '@assets/recommend/r2.png'
import r3 from '@assets/recommend/r3.png'
import r4 from '@assets/recommend/r4.png'
var list = [{
  img: r1,
  price: 120,
  text: '旧年趴 · 上海梅赛德斯奔驰中心 · 12人开团'
}, {
  img: r2,
  price: 50,
  text: '东欧设计展 / 中国美院象山校区'
}, {
  img: r3,
  price: 210,
  text: '室内音乐会 · 西湖区杭州大剧院'
}, {
  img: r4,
  price: 40,
  text: 'Qontinent Rise of the Restless'
}]
export default {
  data () {
    return {
      list
    }
  }
}
</script>

<style lang="css">
.recommend {
  margin-top: 20px;
  padding-bottom: 10px;
}
.title {
  font-size: 18px;
  padding-left: 10px;
  border-left: 3px solid rgb(255, 76, 19);
}
.more {
  float: right;
  margin-right: 15px;
  padding: 4px 8px;
  background-color: #FFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.poster-container {
  width: 100%;
  overflow-x: auto;
}
.poster-wp {
  padding-left: 10px;
  min-width: 100vw;
  overflow-x: auto;
}
.poster-item {
  vertical-align: top;
  margin: 10px 2vw;
  width: 50vw;
  display: inline-block;
}
.poster {
  width: 50vw;
  height: 80vw;
  object-fit: cover;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.06);
}
.poster-text {
  word-wrap: break-word;
}
</style>
