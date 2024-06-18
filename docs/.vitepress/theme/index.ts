import { h } from 'vue'
import Theme from 'vitepress/theme'
import RatingSystem from '../components/Rating.vue'
import PageTransition from '../components/PageTransition.vue' // Import PageTransition component
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // Add PageTransition to wrap the default layout content
      default: () => h(PageTransition, null, {
        default: () => h(Theme.Layout)
      }),
      // Add RatingSystem to layout-bottom slot
      'layout-bottom': () => h(RatingSystem)
    })
  },
  enhanceApp({ app }) {
    // Register components globally
    app.component('RatingSystem', RatingSystem)
    app.component('PageTransition', PageTransition)
  }
}
