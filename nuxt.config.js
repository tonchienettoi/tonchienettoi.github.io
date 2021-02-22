export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: ''
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ton chien et toi',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Educateur cnnin, résolution de troubles de comportement (agréssivité, destruction ...) en Isère et Savoie' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'Ton chien et toi',
        },
        {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@tonchienettoi',
        },
        {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@tonchienettoi',
        },
        {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Éducatrice comportementalise canin',
        },
        {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:'Educatrice cannin, résolution de troubles de comportement (agréssivité, destruction ...) en Isère et Savoie',
        },
        {
        hid: 'og:image',
        property: 'og:image',
        content:
        './assets/images/anne_educ_dog.png',
        },
        {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Ton chien et toi',
        },
        {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
        },
        {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://tonchienettoi.fr',
        },
        {
        hid: 'og:title',
        name: 'og:title',
        content: 'Ton chien et toi',
        },
        {
        hid: 'og:description',
        name: 'og:description',
        content:'Educatrice canin, résolution de troubles de comportement (agréssivité, destruction ...) en Isère et Savoie'
        }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://tonchienettoi.fr',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'G-J8J22PGC9W'
  }
}
