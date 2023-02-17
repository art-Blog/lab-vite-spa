<template>
  <span :class="actionByStyle">{{ props.actionBy.name }}</span>
  <span>{{ actionDescribe }}</span>
  <span :class="actionValueStyle">{{ actionValue }} </span>
  <span v-if="actionType===action.attack"> 點傷害</span>
  <span v-else> 點生命</span>
</template>

<script setup>
import {computed, inject} from "vue";
const action = inject(['action'])
const props = defineProps(['actionBy', 'actionType', 'actionValue'])

const isActionTypeHeal = computed(() => props.actionType === action.heal.name)
const actionByStyle = computed(() => ({
  'log--player': props.actionBy.isPlayer,
  'log--monster': !props.actionBy.isPlayer
}))
const actionValueStyle = computed(() => ({'log--heal': isActionTypeHeal.value, 'log--damage': !isActionTypeHeal.value}))
const actionDescribe = computed(() => isActionTypeHeal.value ? `${props.actionType} 回復了` : `${props.actionType} 造成 `)
</script>

<style scoped>
.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>