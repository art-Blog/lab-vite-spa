<template>
  <p>
    teams 主要示範參數傳遞，透過 queryString 給予參數後顯示組別成員，經過路由設定將 teamId 接下來，並傳遞給元件 TeamMembers 的 Props；並且 router-link 也可以僅給予路由設定的 name 指定特定路由
  </p>
  <ul>
    <li>queryString -> router -> component's props</li>
    <li>router-link: {name: 'team-members',params: { teamId: teamId }}</li>
  </ul>
  <base-tab-button type='router-link' to="/teams" text="Go!"></base-tab-button>
</template>
<script setup>
import BaseTabButton from "@/components/UI/BaseTabButton.vue";
</script>