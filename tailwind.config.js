module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        dark_p: '#2c2c40',
        dark_s: '#7c7c92',
        dark_t: '#bdbdc8',
        light_p: '#f8f8f9',
        light_s: '#dddde3',
        custom_l: '#fff5e5',
        custom_d: '#ff9900',
      },
      fontFamily: {
        poppins: 'poppins',
      },
    },
  },
  plugins: [],
}
