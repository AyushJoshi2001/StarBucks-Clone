module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {backgroundImage: theme => ({
      'desktop-background': "url('img/star-background.webp')",
      'mobile-background': "url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')",
      }),
      padding: {
        '4/5':'80%',
        '6.66':'15%' 
      }   
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
