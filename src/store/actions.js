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
      .then(res => res.json())
      .then(res => {
        context.commit('SET_ACTIVITY', res.data)
      })
      .catch(e => {})
  },
  getActList (context) {
    return Vue.http({
      method: 'get',
      url: API.GET_ACTIVITY
    })
      .then(res => res.json())
      .then(res => res.data)
      .catch(e => {})
  },
  getActivityDetail (context, id) {
    return Vue.http({
      method: 'get',
      url: API.GET_ACT_DETAIL,
      params: { id }
    })
      .then(res => res.json())
      .then(res => res.data)
      .catch(e => {})
  },
  getGroupList (context, id) {
    id = id || context.state.actId
    return Vue.http({
      method: 'get',
      url: API.GET_GROUP_LIST,
      params: { id }
    })
      .then(res => res.json())
      .then(res => res.data.groupList)
      .catch(e => {})
  },
  createAct (context, payload) {
    return Vue.http({
      method: 'get',
      url: API.CREATE_ACT,
      params: payload
    })
      .then(res => res.json())
      .then(res => res.data)
      .catch(e => {})
  },
  createGroup (context, payload) {
    return Vue.http.post(
      API.CREATE_GROUP,
      payload
    )
      .then(res => res.body.data || [])
      .catch(e => {})
  }
}
