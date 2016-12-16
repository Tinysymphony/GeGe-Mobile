/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from '@router/router'
import API from './API'

const TIME_OUT = 5000

Vue.use(VueResource)

Vue.http.interceptors.push((req, next) => {
  req.timeout = TIME_OUT
  next()
})

export default {
  getActivity (context, payload) {
    return Vue.http({
      method: 'get',
      url: API.GET_ACTIVITY
    })
      .then(res => res.body)
      .then(res => {
        context.commit('SET_ACTIVITY', res.data)
      })
      .catch(e => {})
  },
  getActivityDetail (context, id) {
    return Vue.http({
      method: 'get',
      url: API.GET_ACT_DETAIL,
      params: { id }
    })
      .then(res => res.body.data || {})
      .catch(e => {})
  },
  getGroupList (context) {
    return Vue.http({
      method: 'get',
      url: API.GET_GROUP_LIST
    })
      .then(res => res.body.data || [])
      .catch(e => {})
  },
  createAct (context, payload) {
    return Vue.http({
      method: 'get',
      url: API.CREATE_ACT,
      params: payload
    })
      .then(res => res.body.data)
      .catch(e => {})
  },
  createGroup (context, payload) {
    return Vue.http({
      method: 'post',
      url: API.CREATE_GROUP,
      data: payload
    })
      .then(res => res.body.data || [])
      .catch(e => {})
  }
}
