module.exports = {
  '/m/**': {
    target: 'http://rap.sankuai.com/mockjsdata/12/',
    changeOrigin: true
  },
  '/vapi/**': {
    target: 'http://rap.sankuai.com/mockjsdata/31/',
    changeOrigin: true
  },
  '/api/**': {
    target: 'http://rap.sankuai.com/mockjsdata/21/',
    changeOrigin: true
  }
}
