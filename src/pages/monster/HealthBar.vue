<template>
  <h2>
    <slot></slot>
  </h2>
  <div class="healthBar">
    <div class="healthBar__value" :style="healthStyle"></div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['health'])
const healthStyle = computed(() => ({width: props.health + "%"}))
</script>

<style scoped>
h2 {
  margin: 0.25rem;
}
.healthBar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthBar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}
</style>