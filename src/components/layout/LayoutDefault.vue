<template>
  <the-navigation></the-navigation>
  <section>
    <slot></slot>
  </section>
</template>

<script setup>
import TheNavigation from "@/components/nav/TheNavigation.vue";
</script>

<style scoped>
section {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>