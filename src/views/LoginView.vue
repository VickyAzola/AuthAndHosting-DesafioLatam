<script setup>
import BtnGoogle from '@/components/BtnGoogle.vue'
import { RouterLink } from 'vue-router'
import router from '@/router/index.js'
import { ref } from 'vue'
import { $auth } from '@/firebaseconfig.js'
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    const userData = await signInWithEmailAndPassword($auth, email.value, password.value)

    email.value = ''
    password.value = ''

    if (userData.user) {
      router.push('/home')
    } else {
      alert('Esta cuenta no ha sido registrada')
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <h2>Bienvenido</h2>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Email" v-model="email" required />
    </div>
    <div>
      <label for="password">Contraseña</label>
      <input type="password" id="password" placeholder="Contraseña" v-model="password" required />
    </div>
    <button>Iniciar sesión</button>
  </form>
  <BtnGoogle btnText="Inicia Sesión con Google" />
  <p class="router-link">
    ¿No tienes cuenta? <RouterLink :to="{ name: 'register' }">Registrate</RouterLink>
  </p>
</template>
