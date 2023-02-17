<template>
  <base-tab-button :class="{ active: currentTab === tab }"
                   v-for="(_, tab) in tabs" :key="tab"
                   @click="currentTab = tab">{{ tab }}
  </base-tab-button>
  <base-tab title="透過 component :is 切換元件">
    <component :is="tabs[currentTab]"></component>
  </base-tab>
</template>

<script setup>
import {ref} from "vue";
import BaseTabButton from "@/components/UI/BaseTabButton.vue";
import BaseTab from "@/components/UI/BaseTab.vue";
import IntroMonster from "@/pages/home/IntroMonster.vue";
import IntroAbout from "@/pages/home/IntroAbout.vue";
import IntroTeams from "@/pages/home/IntroTeams.vue";

const currentTab = ref('IntroMonster')
const tabs = {IntroMonster,IntroTeams, IntroAbout}
</script>