// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@ant-design-vue/nuxt", "@nuxtjs/tailwindcss"],
  css: [
    '~/assets/scss/app.scss',
  ],
})
