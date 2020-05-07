const path = require('path')

function resolve(p) {
  return path.join(__dirname, p)
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
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
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/stylesheets/reset.css',
    '~/assets/stylesheets/global.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/stylelint-module', { fix: true }],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-color-function': {
          preserveCustomProps: true,
        },
      },
      preset: {
        stage: 1,
        features: {
          'custom-media-queries': {
            importFrom: [
              resolve('assets/stylesheets/media.css'),
            ],
          },
          'custom-properties': {
            preserve: false,
            importFrom: [
              resolve('assets/stylesheets/variables.css'),
            ],
          },
        },
      },
      order: ['postcss-preset-env', 'postcss-color-function', 'cssnano']
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        console.log(config.module.rules[2])
        config.module.rules.push({
          enforce : 'pre',
          test    : /\.(js|vue)$/,
          loader  : 'eslint-loader',
          exclude : /(node_modules)/,
          options : {
            fix : true,
          },
        })
      }
    }
  }
}
