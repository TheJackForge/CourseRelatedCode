<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="Email Address" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <button>Click to Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    
    setup() {
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(email.value)
            console.log(password.value)
        }

        return { email, password, handleSubmit }

    }

    
}
</script>

<style>

</style>