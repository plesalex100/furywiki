import { h, defineComponent } from 'vue'
import Theme from 'vitepress/theme'
import RatingSystem from '../components/Rating.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'

const CustomLayout = defineComponent({
  setup() {
    return () => h(Theme.Layout, null, {
      'layout-bottom': () => h(RatingSystem),
      default: () => h('transition', { name: 'slide' }, () => h('RouterView'))
    })
  }
})

export default {
  ...Theme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('RatingSystem', RatingSystem)
  }
}
