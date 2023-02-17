<template>
<div>
  <h2 v-if="title">{{ title }}</h2>
  <slot></slot>
</div>
</template>

<script setup>
const props = defineProps(['title'])
const title = props.title
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>