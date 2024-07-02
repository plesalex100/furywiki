<template>
    <div class="rating-system">
      <transition name="fade">
        <div v-if="!rated">
          <span class="header-font" style="font-size: 18px;">Acordă o notă pentru Fury WIKI</span>
          <div class="stars">
            <span v-for="star in 5" :key="star" @click="rate(star)">
              <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <span style="font-family:'Conthrax'; padding-bottom: 30px; font-size: 18px;" v-show="rated">Mulțumim pentru feedback!</span>
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
        setTimeout(() => {
          this.rated = true;
          setTimeout(() => {
            this.rated = false;
          }, 3000);
        }, 500);
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
  