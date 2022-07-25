export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'ZenBlog Bootstrap Template - Index',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { href:"/static/assets/img/favicon.png",rel:"icon"},
      {href:"/static/assets/img/apple-touch-icon.png",rel:"apple-touch-icon"},
      {rel:"preconnect",href:"https://fonts.googleapis.com"},
      {rel:"preconnect",href:"https://fonts.gstatic.com"},
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"},
      { href:"/static/assets/vendor/bootstrap/css/bootstrap.min.css",rel:"stylesheet" },
      {href:"/static/assets/vendor/bootstrap-icons/bootstrap-icons.css",rel:"stylesheet"},
      {href:"/static/assets/vendor/swiper/swiper-bundle.min.css",rel:"stylesheet"},
      {href:"/static/assets/vendor/glightbox/css/glightbox.min.css",rel:"stylesheet"},
      // { href:"/static/assets/vendor/aos/aos.css",rel:"stylesheet"},
      {href:"/static/assets/css/variables.css",rel:"stylesheet"},
      {href:"/static/assets/css/main.css",rel:"stylesheet"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  script: [
    { src:"/static/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"}, 
    {src:"/static/assets/vendor/swiper/swiper-bundle.min.js"}, 
    {src:"/static/assets/vendor/glightbox/js/glightbox.min.js"},
    {src:"/static/assets/vendor/aos/aos.js"},
    {src:"/static/assets/vendor/php-email-form/validate.js"},
    {src:"/static/assets/js/main.js"}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
