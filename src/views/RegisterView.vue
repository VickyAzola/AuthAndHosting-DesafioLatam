<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { $auth } from '@/firebaseconfig.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const success = ref(false)

async function handleSubmit() {
  try {
    const userData = await createUserWithEmailAndPassword($auth, email.value, password.value)

    email.value = ''
    password.value = ''

    if (userData.user) {
      success.value = true
    } else if (userData.user.email) {
      alert('Este correo ya esta registrado')
    } else {
      alert('Error, intentalo de nuevo')
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <p class="success" v-show="success">
      Tu cuenta ha sido creada, ahora pueba
      <RouterLink :to="{ name: 'login' }">Iniciando Sesión</RouterLink>
    </p>
    <h2>Regístrate ¡Es gratis!</h2>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Email" v-model="email" required />
    </div>
    <div>
      <label for="password">Contraseña</label>
      <input type="password" id="password" placeholder="Contraseña" v-model="password" required />
    </div>
    <button>Crea tu cuenta</button>
  </form>
  <p class="router-link">
    ¿Ya tienes una cuenta?
    <RouterLink :to="{ name: 'login' }">Inicia sesión</RouterLink>
  </p>
</template>

<style scoped>
.success {
  border: 1px solid lightgreen;
  background-color: rgba(144, 238, 144, 0.384);
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
