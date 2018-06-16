const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Laurel Springs Animal Hospital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to Laurel Springs Animal Hospital serving the Forsyth/Gwinnett area. We are a full-service small animal practice offering a wide range of medical and surgical services for your pets. We offer superior care in a friendly and compassionate environment.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue2-google-maps.js', ssr: false },
    { src: '~/plugins/vue-gallery.js', ssr: false },
    { src: '~plugins/vue-carousel.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
  ],

  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
      },
    },
  },
  vendor: ['vue2-google-maps'],

  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  /*
  ** Build configuration
  */

};
