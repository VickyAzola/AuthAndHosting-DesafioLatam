<script setup>
import { $auth } from '@/firebaseconfig.js'
import { ref, onMounted } from 'vue'

const authEmail = ref('')

onMounted(() => {
  if ($auth.currentUser) {
    authEmail.value = $auth.currentUser.email
  }
})
</script>

<template>
  <div>
    <h1>Bienvenido</h1>
    <span>{{ authEmail }}</span>
  </div>
</template>

<style scoped>
span {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
