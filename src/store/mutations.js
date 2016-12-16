import img1 from '@assets/hot/h1.jpg'
import img2 from '@assets/hot/h2.jpg'
import img3 from '@assets/hot/h3.jpg'
import img4 from '@assets/hot/h4.jpg'
import img5 from '@assets/hot/h5.jpg'
var imgList = [img1, img2, img3, img4, img5]
export default {
  SET_ACTIVITY (state, data) {
    for (var i = data.length - 1; i >= 0; i--) {
      data[i].img = imgList[i % 5]
    }
    state.activityList = data
    let obj = {}
    for (let i = data.length - 1; i >= 0; i--) {
      obj[data[i].id] = data[i]
    }
    state.catMap = obj
  },
  FINISH_NOTIFY (state) {
    state.notify.isValide = false
  },
  CLEAR_PAGE (state) {
    state.activityList = []
    state.catMap = {}
  },
  SET_ACT_ID (state, id) {
    state.actId = id
  }
}
