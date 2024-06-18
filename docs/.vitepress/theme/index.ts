import { h } from 'vue'
import Theme from 'vitepress/theme'
import RatingSystem from '../components/Rating.vue'
import './style.css'

export default {
  ...Theme,
  Layout: () => h(Theme.Layout, null, {
    'layout-bottom': () => h(RatingSystem),
    default: () => h('transition', { name: 'slide' }, () => h('RouterView'))
  }),
  enhanceApp({ app }) {
    app.component('RatingSystem', RatingSystem)
  }
}
