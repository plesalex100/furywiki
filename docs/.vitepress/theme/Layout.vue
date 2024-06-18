<template>
  <div>
    <Layout>
      <transition name="fade" mode="out-in">
        <component :is="currentPage.component"></component>
      </transition>
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
/* Import the transition styles */
@import './style.css';

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
