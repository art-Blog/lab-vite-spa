<template>
  <section>
    <base-monster-button @click="$emit('attack')">ATTACK</base-monster-button>
    <base-monster-button :disabled="canUseHeavyAttack" @click="$emit('heavyAttack')">Heavy Attack</base-monster-button>
    <base-monster-button @click="$emit('heal')">HEAL</base-monster-button>
    <base-monster-button @click="$emit('surrender')">SURRENDER</base-monster-button>
  </section>
</template>

<script setup>
import BaseMonsterButton from "@/components/UI/BaseMonsterButton.vue";
import {computed} from "vue";

defineEmits(['attack', 'heavyAttack', 'heal', 'surrender'])
const props = defineProps(['currentRound'])
const canUseHeavyAttack = computed(() => props.currentRound % 3 !== 0)
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>