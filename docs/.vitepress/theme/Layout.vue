<template>
  <div>
    <Layout>
      <!-- Default slot for Vitepress content -->
      <slot />

      <!-- Custom slot for additional content at the bottom -->
      <slot name="layout-bottom" />
    </Layout>
  </div>
</template>

<script setup>
import Layout from 'vitepress/theme/default/Layout.vue';

// Add JavaScript for page transition
const addPageTransition = () => {
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.getAttribute('href');

      // Add the class for fade in effect
      document.documentElement.classList.add('page-fade-enter');

      // Wait for the transition to complete before navigating
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Adjust the timeout to match your CSS transition duration
    });
  });
}

// Call the function when the component is mounted
import { onMounted } from 'vue';
onMounted(addPageTransition);
</script>

<script>
export default {
  components: {
    Layout
  }
}
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
