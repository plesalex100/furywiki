<template>
    <div class="rating-system">
      <transition name="fade">
        <div v-if="!rated">
          <span class="header-font">Rate this page</span>
          <div class="stars">
            <span v-for="star in 5" :key="star" @click="rate(star)">
              <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <span style="font-family:'Conthrax'; padding-bottom: 30px;" v-show="rated">Thank you for your feedback!</span>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rating: 0,
        rated: false,
        pageId: 'unique_page_id'
      };
    },
    methods: {
      rate(star) {
        this.rating = star;
        this.rated = true; // Show "Thank you" message immediately
  
        // Chain timeouts for fade effects
        setTimeout(() => {
          this.rated = false; // Fade out "Thank you" message after 3 seconds
        }, 3000);
  
        setTimeout(() => {
          // Fade in rating and stars after "Thank you" fades out (5 seconds)
        }, 3000 + 500); // Add delay for previous timeout
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
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  