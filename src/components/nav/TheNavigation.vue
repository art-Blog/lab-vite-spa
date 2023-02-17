<template>
  <header>
    <ul>
      <li v-for="m in menu">
        <router-link :to="m.to">{{ m.text }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script setup>
import {routes} from "@/router"
const menu = routes.filter(r => r.name).map(r => ({to: r.path, text: r.name}))
</script>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
  background-color: #dddddd;
}
</style>
