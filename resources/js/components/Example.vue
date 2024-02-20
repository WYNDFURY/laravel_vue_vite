<template>
  <div>
    <div v-for="user in users">
      {{ user.name }}
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  users: Array
})

console.log(props.users);
</script>

<style lang="scss" scoped>

</style>