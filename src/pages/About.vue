<template>
  <base-tab>
    <contact-me></contact-me>
  </base-tab>
  <base-tab>
    <contact-history></contact-history>
  </base-tab>
</template>

<script setup>
import BaseTab from "@/components/UI/BaseTab.vue";
import ContactMe from "@/pages/about/ContactMe.vue";
import ContactHistory from "@/pages/about/ContactHistory.vue";
</script>
