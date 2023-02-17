<template>
  <p>
    Monster 是一個簡單的小遊戲，玩家透過每回合的行動進行與怪物的對戰。可執行的操作為【攻擊】【特殊攻擊】【治療】以及【投降】。每回合行動的結果皆會顯示於戰鬥紀錄中，回合結束後可重新開始遊戲。
  </p>
  <ul>
    <li>defineEmits / defineProps</li>
    <li>ref / reactive</li>
    <li>computed</li>
    <li>watch</li>
    <li>Provide / Inject</li>
  </ul>
  <base-tab-button type='router-link' to="/monster" text="Go!"></base-tab-button>
</template>
<script setup>
import BaseTabButton from "@/components/UI/BaseTabButton.vue";
</script>