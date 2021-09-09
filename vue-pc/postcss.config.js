module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px2rem-exclude': {
      // https://www.lqzww.top/posts/403c9d06/
      // 如果设计稿宽度为1920，并且分为24等份，则这里就需要设置为 1920 / 24 = 80，则表示 1rem = 80px
      remUnit: 80
      // exclude: /node_modules|folder_name/i,
    }
  }
}