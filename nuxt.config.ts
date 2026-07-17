// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-viewport', 'vue-yandex-maps/nuxt'],

  /*  */

  vite: {
    optimizeDeps: {
      include: [
        '@fancyapps/ui/dist/fancybox/',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vuelidate/core',
        '@vuelidate/validators',
        'maska/vue',
        'swiper',
      ],
    },
  },

  /*  */

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [{ name: 'robots', content: 'noindex' }], // запрет на индексацию
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  //
  /* runtimeConfig: {
    apiDomain: process.env.NUXT_API_DOMAIN,

    public: {
      domains: process.env.NUXT_PUBLIC_DOMAINS,
      graphqlUrl: process.env.NUXT_PUBLIC_GRAPHQL_URL,
    },
  }, */

  //
  css: ['assets/css/index.css'],

  //
  experimental: {
    typedPages: true,
  },

  //
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  // Плагин nuxt-viewport
  viewport: {
    breakpoints: {
      screen1024: 1024,
      screen1100: 1100,
      screen1200: 1200,
      screen1280: 1280,
      screen1300: 1300,
      screen1600: 1600,

      screen901: 901,
      screen769: 769,
      screen761: 761,
      screen577: 577,
      screen576: 576,
      screen320: 320,
    },
  },

  // Карта Яндекса
  yandexMaps: {
    apikey: 'f52ff3fc-0a45-4e8f-8507-e60a0a562e75',
  },
}); // end defineNuxtConfig
