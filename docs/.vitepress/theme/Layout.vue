<template>
  <div>
    <Layout>
      <transition name="fade" mode="out-in">
        <div v-html="currentPageContent" key="currentRoute"></div>
      </transition>
    </Layout>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import Layout from 'vitepress/theme/default/Layout.vue'; // Adjust path as needed

export default defineComponent({
  name: 'CustomLayout',
  components: {
    Layout
  },
  setup() {
    const currentPageContent = ref('');
    
    // Load initial page content
    loadPageContent(window.location.pathname);

    // Watch for route changes
    watch(() => window.location.pathname, (newPath, oldPath) => {
      if (newPath !== oldPath) {
        loadPageContent(newPath);
      }
    });

    function loadPageContent(path) {
      // Assuming your Markdown files are located in a specific directory (e.g., docs)
      const markdownFilePath = `./docs${path}.md`;

      fetch(markdownFilePath)
        .then(response => response.text())
        .then(data => {
          currentPageContent.value = data;
        })
        .catch(error => {
          console.error(`Error loading Markdown content for ${path}:`, error);
          currentPageContent.value = `<p>Page not found or failed to load.</p>`; // Handle error
        });
    }

    return {
      currentPageContent
    };
  }
});
</script>

<style lang="css">
/* Import your main styles */
@import './style.css';

/* Define fade transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
