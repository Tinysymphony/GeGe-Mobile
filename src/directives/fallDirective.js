import Vue from 'vue'
import _ from 'src/util'
let width = 150
let space = 0
let initCalc = false
let waterfallList = []
let elList = []
let isBind = false
let resizeHandler = _.throttle(recalc, 100)
export default Vue.directive('fall', {
  inserted (el, binding) {
    if (!isBind) {
      window.addEventListener('resize', resizeHandler)
      isBind = true
    }
  },
  componentUpdated (el, binding) {
    if (!binding.value.isFinish && !binding.value.isError) return
    if (!initCalc) init(el)
    elList.push(el)
    placeElement(el)
  },
  unbind (el) {
    for (let i = elList.length; i >= 0; i--) {
      if (elList[i] === el) {
        elList.splice(i, 1)
        break
      }
    }
    if (!elList.length) {
      window.removeEventListener('resize', resizeHandler)
      isBind = false
    }
  }
})

function init (el) {
  const parent = el.parentNode
  const size = ~~(parent.offsetWidth / width)
  const distance = ~~(parent.offsetWidth % width / (size + 1))
  space = ~~(distance * 3 / 4)
  waterfallList.length = 0
  for (let i = 0; i < size; i++) {
    waterfallList.push({
      top: 0,
      left: i * (distance + width) + distance
    })
  }
  initCalc = true
}

function placeElement (el) {
  el.style.left = waterfallList[0].left + 'px'
  el.style.top = waterfallList[0].top + 'px'
  waterfallList[0].top += el.offsetHeight + space
  waterfallList.sort((a, b) => a.top >= b.top)
}

function recalc () {
  if (!elList.length) return
  init(elList[0])
  for (let i = 0, len = elList.length; i < len; i++) {
    placeElement(elList[i])
  }
}
