---
layout: home
hero:
  name: Fury Romania Roleplay
  text: Official Wiki
  tagline: Află informațiile updatate la zi despre toate sistemele prezente pe serverul nostru.
  image:
    src: /fury-logo.svg
    # src: https://i.imgur.com/5u7z38w.gif
    alt: Fury
  actions:
    - theme: brand
      text: Află mai multe ->
      link: /informatii/about
---
<!-- https://vitepress.dev/reference/default-theme-home-page -->

<script setup> 
    import SiteMap from '/.vitepress/components/SiteMap.vue'
    import Home from '/.vitepress/components/Home.vue'
</script>

<Home />
<SiteMap />