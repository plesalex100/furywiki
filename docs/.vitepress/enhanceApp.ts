import { defineAppEnhance } from 'vitepress'
import PrimeVue from 'primevue/config'
import Rating from 'primevue/rating'
import 'primevue/resources/themes/saga-blue/theme.css'   // Import PrimeVue theme
import 'primevue/resources/primevue.min.css'              // Import PrimeVue styles
import 'primeicons/primeicons.css'

export default defineAppEnhance(({ app, router, siteData }) => {
  app.use(PrimeVue)
  app.component('Rating', Rating)
})
