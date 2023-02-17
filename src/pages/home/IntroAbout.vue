<template>
  <p>
    about 提供了一個簡單的表單，允許使用者送出資料並儲存，且可透過讀取資料的按鈕取得後端資料
  </p>
  <ul>
    <li>onMounted</li>
    <li>http request (via. fetch)</li>
  </ul>
  <base-tab-button type='router-link' to="/about" text="Go!"></base-tab-button>
</template>
<script setup>
import BaseTabButton from "@/components/UI/BaseTabButton.vue";
</script>