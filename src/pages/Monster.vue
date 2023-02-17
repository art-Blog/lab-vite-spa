<template>
    <section>Round:{{ round }}</section>
    <base-container id="monster">
      <health-bar :health="monsterHealthPercent">Monster Health {{ state.monsterHealth }}</health-bar>
    </base-container>

    <base-container id="player">
      <health-bar :health="playerHealthPercent">Your Health {{ state.playerHealth }}</health-bar>
    </base-container>

    <base-container v-if="result">
      <battle-result :result="result" @reset="resetHandler"></battle-result>
    </base-container>

    <battle-actions v-if="!result"
                    :current-round="round"
                    @attack="attackHandler"
                    @heavy-attack="heavyAttackHandler"
                    @heal="healHandler"
                    @surrender="surrenderHandler"
    ></battle-actions>

    <base-container>
      <battle-history :log-message="logMessage"></battle-history>
    </base-container>
</template>

<script setup>
import {computed, provide, reactive, ref, watch} from "vue";
import HealthBar from "@/pages/monster/HealthBar.vue";
import BaseContainer from "@/components/UI/BaseContainer.vue";
import BattleResult from "@/pages/monster/BattleResult.vue";
import BattleActions from "@/pages/monster/BattleActions.vue";
import BattleHistory from "@/pages/monster/BattleHistory.vue";

// 回合數
const round = ref(1)
const _incrementRound = () => round.value++

// 戰鬥紀錄
const logMessage = reactive([])
const logFormat = (who, what, value) => ({actionBy: who, actionType: what, actionValue: value})
const _addLogMessage = log => logMessage.unshift(log)

// 戰鬥結果
const gameResult = {lose: '玩家失敗', win: '玩家獲勝', draw: '平手'}
const result = ref(null)

// 遊戲腳色設定
const character = {
  monster: {name: '怪物', isPlayer: false, prop: 'monsterHealth', lifeMax: 100},
  player: {name: '玩家', isPlayer: true, prop: 'playerHealth', lifeMax: 200},
}
const state = reactive({playerHealth: character.player.lifeMax, monsterHealth: character.monster.lifeMax})
const playerHealthPercent = computed(() => (state.playerHealth / character.player.lifeMax) * 100)
const monsterHealthPercent = computed(() => (state.monsterHealth / character.monster.lifeMax) * 100)

// 回合行動設定
const _getRandomValue = range => (Math.floor(Math.random() * (Math.max(...range) - Math.min(...range))) + Math.min(...range))
const _healRule = (HP, healHP) => HP + healHP >= character.player.lifeMax ? character.player.lifeMax : HP + healHP
const _attackRule = (HP, damage) => HP - damage <= 0 ? 0 : HP - damage
const _roundAction = (who, action, user) => {
  const point = _getRandomValue(action.power)
  state[user.prop] = action.rule(state[user.prop], point)
  _addLogMessage(logFormat(who, action.name, point))
}
const action = {
  attack: {name: '攻擊', power: [5, 12], rule: _attackRule},
  heavyAttack: {name: '重擊', power: [10, 25], rule: _attackRule},
  heal: {name: '治療', power: [8, 20], rule: _healRule},
  monsterAttack: {name: '攻擊', power: [8, 15], rule: _attackRule},
}
// 按鈕事件
const attackHandler = () => {
  _incrementRound()
  _roundAction(character.monster, action.monsterAttack, character.player)
  _roundAction(character.player, action.attack, character.monster)
}
const heavyAttackHandler = () => {
  _incrementRound()
  _roundAction(character.monster, action.monsterAttack, character.player)
  _roundAction(character.player, action.heavyAttack, character.monster)
}
const healHandler = () => {
  _incrementRound()
  _roundAction(character.monster, action.monsterAttack, character.player)
  _roundAction(character.player, action.heal, character.player)
}
const surrenderHandler = () => result.value = gameResult.lose
const resetHandler = () => {
  result.value = null
  round.value = 1
  logMessage.length = 0
  state.playerHealth = character.player.lifeMax
  state.monsterHealth = character.monster.lifeMax
}

// 監視生命值變化
const _checkWinner = (checkPoints, value) => {
  for (const check of checkPoints) {
    if (check.condition(value))
      result.value = check.result
  }
}
watch(() => state.playerHealth, value => {
  const checkPoints = [
    {result: gameResult.draw, condition: value => value <= 0 && state.monsterHealth <= 0},
    {result: gameResult.lose, condition: value => value <= 0}
  ]
  _checkWinner(checkPoints, value)
})
watch(() => state.monsterHealth, value => {
  const checkPoints = [
    {result: gameResult.draw, condition: value => value <= 0 && state.playerHealth <= 0},
    {result: gameResult.win, condition: value => value <= 0}
  ]
  _checkWinner(checkPoints, value)
})

provide('action', action)
</script>

<style scoped>
* {
  box-sizing: border-box;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}
</style>