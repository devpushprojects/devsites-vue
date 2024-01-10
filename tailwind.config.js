module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      data: {
        normal: 'state~="normal"',
        active: 'state~="active"'
      }
    }
  },
  plugins: [],
}