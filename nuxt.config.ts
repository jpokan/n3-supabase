// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-svgo'],
    css: ['~/assets/css/main.css'],
    postcss:{
        plugins:{
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseKey: process.env.SUPABASE_KEY
        }
    }
});
