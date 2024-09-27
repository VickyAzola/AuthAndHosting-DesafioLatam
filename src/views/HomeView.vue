<script setup>
import { $auth } from '@/firebaseconfig.js'
import { ref, onMounted } from 'vue'
import { signOut } from 'firebase/auth'
import router from '@/router/index.js'

const authEmail = ref('')

onMounted(() => {
  if ($auth.currentUser) {
    authEmail.value = $auth.currentUser.email
  }
})

async function handleSalir() {
  signOut($auth).then(() => {
    router.push({ name: 'login' })
  })
}
</script>

<template>
  <div>
    <h1>Bienvenido</h1>
    <span>{{ authEmail }}</span>
  </div>
  <button @click="handleSalir">Cerrar Sesión</button>
</template>

<style scoped>
span {
  font-size: 1.5rem;
  font-weight: 400;
}

button {
  margin-top: 2rem;
}
</style>
