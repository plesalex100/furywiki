<template>
  <div class="rating-system">
    <transition name="fade">
      <div v-if="!rated">
        <span class="header-font" style="font-size: 18px;">Rate this page</span>
        <div class="stars">
          <span v-for="star in 5" :key="star" @click="rate(star)">
            <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'"></i>
          </span>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <span style="font-family:'Conthrax'; padding-bottom: 30px; font-size: 18px;" v-show="rated">Thank you for your feedback!</span>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rated: false,
      pageId: 'unique_page_id' // Assuming you're setting the page ID dynamically, replace this with the actual page ID
    };
  },
  computed: {
    rating() {
      // Retrieve the rating for this page from Vuex store
      return this.$store.state.pageRatings[this.pageId] || 0;
    }
  },
  methods: {
    rate(star) {
      // Update the rating for this page in Vuex store
      this.$store.commit('updateRating', { pageId: this.pageId, rating: star });

      this.rated = true;
      setTimeout(() => {
        this.rated = false;
      }, 3000); // Delay before fading out the "Thank you" message
      // Here, you can send the rating to your server or any backend service
      console.log(`Page rated with ${star} stars.`);
    }
  }
};
</script>

<style>
.rating-system {
  text-align: center;
  margin-top: 10px;
}

.stars {
  font-size: 12px;
}

.stars span {
  cursor: pointer;
  color: #ffca28;
}

.stars span:hover {
  color: #ffa000;
}

.fas.fa-star {
  color: #ffca28;
}

.far.fa-star {
  color: #e0e0e0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
