<template>
  <router-link v-if="type==='router-link'" :to="to">{{ text }}</router-link>
  <button v-else>
    <slot></slot>
  </button>
</template>

<script setup>
import {toRefs} from "vue";

const props = defineProps(['type','to','text'])
const {type,to,text} = toRefs(props)
</script>

<style scoped>
button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

button:hover {
  background: #77ecc7;
}
button.active {
  background: #77ecc7;
}

a {
  font-size: 13px;
  color: #2d2e2f;
  outline: none;
  text-decoration: none;
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  background: #77ecc7;
  text-decoration: none;
}

a.active {
  background: #77ecc7;
  text-decoration: none;
}

a:focus {
  text-decoration: none;
}
</style>