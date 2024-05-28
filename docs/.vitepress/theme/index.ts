// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import RatingSystem from './components/Rating.vue'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => h(RatingSystem)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('RatingSystem', RatingSystem)
  }
}
