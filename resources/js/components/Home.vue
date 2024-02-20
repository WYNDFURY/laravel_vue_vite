<template>
  <div>
    <h1>Home</h1>
      <div v-for="user in users.data" :key="user.id">
        {{ user.name }}
      </div>
  </div>
</template>

<script setup>
import { users } from '../endpoints/users/users.js';








</script>

<style lang="scss" scoped>

</style>