var router = require('express').Router()
var request = require('request')
var prefix = 'http://127.0.0.1:8080/hack-1.0.0/'
router.get('/getActivity', function (req, res) {
  request(prefix + 'activity/list', function (err, response, body) {
    if (!err && res.statusCode === 200) {
      res.json(body)
    } else {
      res.send({
        id: 234
      })
    }
  })
})
module.exports = router
