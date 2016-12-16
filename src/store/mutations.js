export default {
  SET_ACTIVITY (state, data) {
    state.activityList = data
    let obj = {}
    for (let i = data.length; i >= 0; i--) {
      obj[data[i].id] = data[i]
    }
    state.catMap = obj
  }
}
