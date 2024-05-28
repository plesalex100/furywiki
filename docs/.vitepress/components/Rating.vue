<template>
    <div class="rating-system">
      <transition name="fade" v-if="!rated">
        <div>
          <span class="header-font">Rate this page</span>
          <div class="stars">
            <span v-for="star in 5" :key="star" @click="rate(star)">
              <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </transition>
      <transition name="fade" v-else>
        <span style="font-family:'Conthrax'; padding-bottom: 30px;">Thank you for your feedback!</span>
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
        this.rated = true;
        setTimeout(() => {
          this.rated = false;
        }, 5000); // 5000 milliseconds = 5 seconds
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
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  