// vue.config.js
module.exports = {
    // options...
    devServer: {
          proxy:{
              '/user':{
                target: "http://127.0.0.1:4000/",
                timeout: 6000,
                secure: false,
                logLevel:"debug",
                changeOrigin: true,
              }
          } 
      }
}