export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '株式会社Papillon',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '株式会社Papillonは、e-sportsのプラットフォームを開発している学生ベンチャーです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '株式会社Papillon'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:title', property: 'og:title', content: '株式会社Papillon'},
      { hid: 'og:description', property: 'og:description', content: '株式会社Papillonは、e-sportsのプラットフォームを開発している学生ベンチャーです。'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    description: '株式会社Papillonは、e-sportsのプラットフォームを開発している学生ベンチャーです。'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    ['nuxt-mail', {
      smtp: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'adhisuabeba@gmail.com',
          pass: 'qeCR4MjStFCgaHU'
        }
      }
    }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Markdown it
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: false,
    html: false,
    runtime: true,
    typographer: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  webfontloader: {
    google: {
      families: ['Roboto']
    }
  }
}
