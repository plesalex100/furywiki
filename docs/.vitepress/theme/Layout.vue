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
import { onMounted } from 'vue';
import Layout from 'vitepress/theme/default/Layout.vue';

// Function to handle page transition
const addPageTransition = () => {
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.getAttribute('href');

      // Add the class for fade out effect
      document.documentElement.classList.add('page-fade-leave');

      // Wait for the transition to complete before navigating
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Adjust the timeout to match your CSS transition duration
    });
  });
}

// Call the function when the component is mounted
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
/* Define CSS transitions for page fade effect */
.page-fade-leave {
  opacity: 0;
  transition: opacity 0.5s ease; /* Adjust timing and animation properties as needed */
}
</style>
