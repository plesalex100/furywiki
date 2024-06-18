// https://vitepress.dev/guide/custom-theme
import { h, defineComponent } from 'vue'
import Theme from 'vitepress/theme'
import RatingSystem from '../components/Rating.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'

const CustomLayout = defineComponent({
  setup() {
    return () => h('div', { class: 'custom-layout' }, [
      h('transition', { name: 'slide' }, [
        h(Theme.Layout)
      ])
    ])
  }
})

export default {
  ...Theme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('RatingSystem', RatingSystem)
  }
}
