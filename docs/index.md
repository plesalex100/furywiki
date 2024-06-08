---
layout: home
hero:
  name: Fury Romania Advanced Roleplay
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
    - component: HomeClip
    - theme: alt
      text: 🎧 Alătură-te pe Discord
      link: https://discord.gg/furyro
---
<script setup> 
    import SiteMap from '/.vitepress/components/SiteMap.vue'
    import Home from '/.vitepress/components/Home.vue'
    // import Rating from '/.vitepress/components/Rating.vue'
    import HomeClip from '.vitepress/components/HomeClip.vue'
</script>

<template>
  <Home />
  <div id="hero" class="hero">
    <h1>{{ hero.name }}</h1>
    <p>{{ hero.text }}</p>
    <p>{{ hero.tagline }}</p>
    <div class="actions">
      <a class="get-started" :href="hero.actions[0].link">{{ hero.actions[0].text }}</a>
      <HomeClip />
      <a class="setup" :href="hero.actions[1].link">{{ hero.actions[1].text }}</a>
    </div>
  </div>
  <SiteMap />
</template>

<style scoped>
.hero {
  text-align: center;
  margin: 20px 0;
}
.hero h1 {
  font-size: 48px;
  color: orange;
}
.hero p {
  font-size: 18px;
  color: white;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}
.actions .get-started {
  background-color: var(--vp-button-brand-bg);
  color: #fff;
}
.actions .setup {
  background-color: var(--vp-button-alt-bg);
  color: #fff;
}
</style>