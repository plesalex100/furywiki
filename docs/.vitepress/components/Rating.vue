
<template>
    <div class="rating-system">
      <span class="header-font">Rate this page</span>
      <div class="stars">
        <span v-for="star in 5" :key="star" @click="rate(star)">
          <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'"></i>
        </span>
      </div>
      <span style="font-family:'Conthrax'; padding-bottom: 30px;" v-if="rated">Thank you for your feedback!</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rating: 0,
        rated: false
      };
    },
    methods: {
      rate(star) {
        this.rating = star;
        this.rated = true;
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
  </style>
  