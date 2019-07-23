module.exports = {
  presets: [
    '@vue/app',
  ],
  ignore: [
    "./src/assets/libs/*.js"
  ],
  plugins: ["transform-remove-strict-mode"]
}

