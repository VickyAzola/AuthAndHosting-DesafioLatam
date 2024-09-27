<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style>
main {
  display: grid;
  place-content: center;
  min-height: 80vh;
}
</style>
