// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// import { RouterView } from 'vue-router'
import Theme from 'vitepress/theme'
import RatingSystem from '../components/Rating.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => h(RatingSystem),
      default: () => h('transition', {
        name: 'slide'
      }, {
        default: () => h(RouterView)
      })
    })
  },
  enhanceApp({ app, router }) {
    app.component('RatingSystem', RatingSystem)

    // Global navigation guards for route changes
    router.beforeEach((to, from, next) => {
      const content = document.querySelector('.content')
      if (content) {
        content.classList.add('slide-leave-active')
        setTimeout(() => {
          content.classList.remove('slide-leave-active')
          next()
        }, 300) // Match the duration of your transition
      } else {
        next()
      }
    })
  }
}
