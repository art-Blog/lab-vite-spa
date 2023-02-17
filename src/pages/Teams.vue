<template>
  <base-tab>
    <teams-list></teams-list>
  </base-tab>
</template>

<script setup>
import BaseTab from "@/components/UI/BaseTab.vue";
import {provide, reactive} from "vue";
import TeamsList from "@/pages/teams/TeamsList.vue";

const teams = reactive([
  {id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2']},
  {id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3']},
  {id: 't3', name: 'Client Consulting', members: ['u4', 'u5']},
])
const users = reactive([
  {id: 'u1', fullName: 'Max Schwarz', role: 'Engineer'},
  {id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer'},
  {id: 'u3', fullName: 'Julie Jones', role: 'Engineer'},
  {id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant'},
  {id: 'u5', fullName: 'Marie Smith', role: 'Consultant'},
])

provide('teams', teams)
provide('users', users)

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>