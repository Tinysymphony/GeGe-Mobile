/* eslint-disable */

var router = require('express').Router()
var request = require('request')
var jar = request.jar()
var prefix = 'http://103.37.156.235:8080/hack-1.0.0'
router.get('/getActivity', function (req, res) {
  request({
    method: 'GET',
    url: prefix + '/activity/list'
  }, function (err, response, body) {
    if (!err && res.statusCode === 200) {
      res.send(body)
    } else {
      res.json({
        code: 500,
        msg: 'failed',
        data: []
      })
    }
  })
})

router.get('/getActivityDetail', function (req, res) {
  request({
    method: 'GET',
    url: prefix + '/activity/getById?id=' + req.query.id,
    jar: jar
  }, function (err, response, body) {
    if (!err && res.statusCode === 200) res.send(body)
    else {
      res.json({
        msg: 'failed',
        code: 500,
        data: {}
      })
    }
  })
})

router.get('/getActList', function (req, res) {
  request({
    method: 'GET',
    url: prefix + '/activity/getById',
    params: req.query,
    jar: jar
  }, function (err, response, body) {
    if (!err && res.statusCode === 200) {
      res.json({
        code: body.code || 500,
        msg: body.msg || 'failed',
        data: body.data ? body.data.groupList || [] : []
      })
    } else {
      res.json({
        msg: 'failed',
        code: 500,
        data: {}
      })
    }
  })
})

router.get('/createAct', function (req, res) {
  request({
    method: 'GET',
    url: prefix + '/activity/create' + _parseQuery(req.query),
    jar: jar
  }, function (err, response, body) {
    console.log(body);
    if (!err && res.statusCode === 200) res.send(body)
    else {
      res.json({
        msg: 'failed',
        code: 500,
        data: 0
      })
    }
  })
})

router.post('/createGroup', function (req, res) {
  request({
    method: 'POST',
    url: prefix + '/group/batchCreate',
    json: req.body,
    jar: jar
  }, function (err, response, body) {
    if (!err && res.statusCode === 200) res.send(body)
    else {
      res.json({
        msg: 'failed',
        code: 500,
        data: []
      })
    }
  })
})

function _parseQuery (obj) {
  var arr = []
  for(let a in obj) {
    arr.push(a + '=' + obj[a])
  }
  return '?' + arr.join('&')
}

module.exports = router
