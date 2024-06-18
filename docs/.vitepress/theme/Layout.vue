<template>
  <div>
    <Layout>
      <transition name="fade" mode="out-in">
        <!-- Replace router-view with component :is -->
        <component :is="currentPage.component"></component>
      </transition>
      <!-- Preserve existing slot for layout-bottom -->
      <slot name="layout-bottom" />
    </Layout>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Layout from 'vitepress/theme/default/Layout.vue';  // Adjust path as needed
import config from './config.ts';

export default defineComponent({
  name: 'CustomLayout',
  components: {
    Layout
  },
  setup() {
    const currentPage = ref(null);

    // Load initial page
    currentPage.value = config.pages[0];

    return {
      currentPage
    };
  }
});
</script>

<style lang="css">
@import './style.css';
</style>
