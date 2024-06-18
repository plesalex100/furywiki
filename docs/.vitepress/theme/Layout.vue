<template>
  <div>
    <Layout>
      <transition name="slide">
        <router-view />
      </transition>
      <!-- Insert the rating system component at the bottom of the layout -->
      <slot name="layout-bottom" />
    </Layout>
  </div>
</template>

<script>
import Layout from 'vitepress/theme/default/Layout.vue'

export default {
  components: {
    Layout
  }
}
</script>
