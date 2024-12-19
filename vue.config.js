// vue.config.js
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/global.scss";`,
      },
    },
  },
}
