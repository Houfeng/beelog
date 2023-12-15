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
      serif: ['STFangsong', 'Fangsong', 'FangsongGB2312', 'ui-serif', 'serif'],
    },
  }
}