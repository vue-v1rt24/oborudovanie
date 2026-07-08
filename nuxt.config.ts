// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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
}); // end defineNuxtConfig
