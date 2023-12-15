module.exports = {
  content: ["./views/**/*.html"],
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      "lofi",
      "black",
    ],
  },
  theme: {
    fontFamily: {
      // 'FangsongGB2312', 'ui-serif', 'serif'
      serif: ['STFangsong', 'Fangsong', 'FangsongGB2312', 'ui-serif', 'serif'],
    },
  }
}