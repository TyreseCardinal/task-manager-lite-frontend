// vue.config.js
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/styles/global.scss";`,
      },
    },
  },
}
