// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/mdc"],

  // imports: {
  //   scan: false,
  // },
  runtimeConfig: {
    openaiApiKey: "hello",
    public: {
      someValue: "On the frontend",
    },
  },
  mdc: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["html", "markdown", "vue", "typescript", "javascript"],
    },
  },
});
