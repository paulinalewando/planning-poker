// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#932d53' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/socket.client.js' },
    { src: '~/plugins/vuetify.js' }
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: '#932d53',
          secondary: '#6F6F6E',
          accent: '#F3F4F3',
          error: '#F20E38',
          info: '#055B97',
          success: '#AFC90C',
          warning: '#FF6501'
        }
      }
    },
    defaultAssets: { icons: 'fa' }
  },
  pwa: {
    manifest: {
      name: 'Planning poker',
      short_name: 'Planning poker',
      start_url: '/',
      theme_color: '#932d53',
      display: 'standalone'
    },
    icon: {
      iconSrc: './static/favicon.ico'
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  telemetry: false
}
