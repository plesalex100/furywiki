---
layout: home
hero:
  name: Fury Romania Advanced Roleplay
  text: Official Wiki
  tagline: Află informațiile updatate la zi despre toate sistemele prezente pe serverul nostru.
  image:
    src: https://i.imgur.com/Y6Uu9Qt.png
    # src: https://i.imgur.com/5u7z38w.gif
    alt: Fury
  actions:
    - theme: brand
      text: Află mai multe ->
      link: /informatii/about
    - theme: alt
      text: 🎧 Alătură-te pe Discord
      link: https://discord.gg/furyro
---
<!-- https://vitepress.dev/reference/default-theme-home-page -->

<script setup> 
    import SiteMap from '/.vitepress/components/SiteMap.vue'
    import Home from '/.vitepress/components/Home.vue'
</script>

<Home />
<SiteMap />