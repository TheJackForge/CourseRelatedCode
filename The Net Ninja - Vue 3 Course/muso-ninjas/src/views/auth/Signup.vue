<template>
    <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <input type="text" required placeholder="Display Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending" disabled>Loading</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/composables/useSignup'

export default {

    setup() {
        const { error, signup, isPending } = useSignup()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                console.log('User Signed Up')
            } 
        }

        return { displayName, email, password, isPending, error, handleSubmit }

    }
}
</script>

<style>

</style>