<script setup>
import GoogleIcon from '@/components/icons/GoogleIcon.vue'
import router from '@/router/index.js'
import { $auth } from '@/firebaseconfig.js'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { defineProps } from 'vue'

defineProps({
  btnText: {
    type: String,
    required: true
  }
})

async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup($auth, provider)

    if (result.user) {
      router.push('/home')
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <button @click="signInWithGoogle">
    {{ btnText }}
    <GoogleIcon class="icon" />
  </button>
</template>

<style scoped>
button {
  width: 18rem;
  margin-inline: auto;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
}

button:hover {
  border: 1px solid rgb(122, 122, 122);
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
