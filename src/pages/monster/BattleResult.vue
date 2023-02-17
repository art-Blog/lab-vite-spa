<template>
  <h2>Game Over</h2>
  <h3 v-if="result">{{ result }}</h3>
  <base-monster-button @click="$emit('reset')">Start New Game</base-monster-button>
</template>

<script setup>
import BaseMonsterButton from "@/components/UI/BaseMonsterButton.vue"

defineProps(['result'])
defineEmits(['reset'])
</script>
