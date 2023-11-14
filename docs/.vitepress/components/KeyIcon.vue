<template>
    <img :src="'../keys-images/key-' + keyType + '.png'" class="key-image">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        keyType: {
            type: String,
            required: true
        }
    },
});
</script>

<style scoped>
img.key-image {
    height: 30px;
    display: inline-block;
    transform: translateY(10px);
}
</style>
