<script setup lang="ts">
import Rating from 'primevue/rating';

const value = ref<number | null>(0);
</script>

<template>
    <Rating v-model="value" />
</template>