import { h } from 'vue'
import Theme from 'vitepress/theme'
import PageTransition from '../components/PageTransition.vue'
import RatingSystem from '../components/Rating.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      default: () => h(PageTransition, null, {
        default: () => h(Theme.Layout)
      }),
      'layout-bottom': () => h(RatingSystem)
    })
  },
  enhanceApp({ app }) {
    app.component('PageTransition', PageTransition)
    app.component('RatingSystem', RatingSystem)
  }
}
