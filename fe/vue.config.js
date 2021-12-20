module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: '0.0.0.0:8080',
    proxy: {
        '^/api/': {
            target: 'http://localhost:1337/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/api/': '/'
            }
        },
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
