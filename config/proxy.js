module.exports = {
  '/m/**': {
    target: 'http://rap.sankuai.com/mockjsdata/12/',
    changeOrigin: true
  },
  '/vapi/**': {
    target: 'http://rap.sankuai.com/mockjsdata/31/',
    changeOrigin: true
  }
}
