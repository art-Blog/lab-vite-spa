<template>
  <p>
    <span class="highlight">{{ name }}</span>
    rated the experience
    <span class="highlight" :class="ratingClass">{{ rating }}</span>.
  </p>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['name', 'rating'])
const ratingClass = computed(() => 'rating--' + props.rating)
</script>

<style scoped>
h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}

.rating--great {
  color: #008327;
}
</style>