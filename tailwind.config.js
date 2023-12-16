module.exports = {
  content: ['./views/**/*.html'],
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['lofi'],
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['black'],
          '--rounded-box': '0.25rem',
          '--rounded-btn': '0.125rem',
          '--rounded-badge': '0.125rem',
          '--tab-radius': '0.125rem',
          '--animation-btn': 0,
          '--animation-input': 0,
          '--btn-focus-scale': 1,
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      serif: ['STFangsong', 'Fangsong', 'FangsongGB2312', 'ui-serif', 'serif'],
      sans: ['sans'],
    },
  }
}