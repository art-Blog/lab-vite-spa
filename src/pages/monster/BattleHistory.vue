<template>
  <h2>Battle Log</h2>
  <ul v-if="logMessage.length > 0">
    <li v-for="log in logMessage">
      <battle-record v-bind="log"></battle-record>
    </li>
  </ul>
</template>

<script setup>
import BattleRecord from "./BattleRecord.vue";

defineProps({
  logMessage: {type: Array, default: []}
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}
</style>