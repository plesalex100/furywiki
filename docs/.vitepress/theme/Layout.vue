<template>
  <div>
    <Layout>
      <PageTransition>
        <!-- This slot will contain the content of your pages -->
        <slot />
      </PageTransition>
      <!-- Optionally, you can insert other components or content here -->
      <slot name="layout-bottom" />
    </Layout>
  </div>
</template>

<script>
import Layout from '/.vitepress/theme/Layout.vue';
import PageTransition from '/.vitepress/components/PageTransition.vue';

export default {
  components: {
    Layout,
    PageTransition
  }
}
</script>
