// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@prisma/nuxt"],

  tailwindcss: {
    exposeConfig: true,
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Roboto", "sans-serif"],
            title: ["Trade Gothic", "sans-serif"],
          },
        },
      },
      plugins: [require("tailwindcss-primeui")],
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".my-app-dark",
        },
      },
    },
  },

  vite: {
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
      },
    },
  },

  css: ["primeicons/primeicons.css"],
});
