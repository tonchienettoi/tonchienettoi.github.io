export default {
  //  server: {     
  //   port: 8000, // default: 3000     
  //   host: '0.0.0.0', // default: localhost   
  //  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: ''
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Educateur canin à Crolles, de Grenoble à Chambéry',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Éducateur comportementaliste canin en Isère et Savoie (de Grenoble à Chambéry). Méthode positive. Résolution de troubles du comportement (agressivité, destruction, vols ...)' },
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
        content:'Éducateur comportementaliste canin en Isère et Savoie (de Grenoble à Chambéry). Méthode positive. Résolution de troubles du comportement (agressivité, destruction, vols ...)',
        },
        {
        hid: 'og:image',
        property: 'og:image',
        content:
        'https://tonchienettoi.fr/anne_mer.jpg',
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
        content:'Éducateur comportementaliste canin en Isère et Savoie (de Grenoble à Chambéry). Méthode positive. Résolution de troubles du comportement (agressivité, destruction, vols ...)'
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
    id: 'UA-190343038-1'
  }
}
