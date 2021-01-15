<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup() {
        const { error, signup } = useSignup()

        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            console.log('User Signed Up')
        }

        return { displayName, email, password, handleSubmit }
    }
}
</script>

<style>

</style>