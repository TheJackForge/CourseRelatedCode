<template>
    <nav v-if="user">
        <div>
            <p>Hey there... {{ user. displayName }}</p>
            <p class="email">Currently logged in as... {{ user.email }}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>      
</template>

<script>
    import useLogout from '../composables/useLogout'
    import getUser from '../composables/getUser'
    import { useRouter } from 'vue-router'

export default {
    setup() {
        const { logout, error } = useLogout()
        const { user } = getUser()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                router.push( { name: 'Welcome' })
                console.log('User logged out')
            }
        }

        return { handleClick, user }
    }

}
</script>

<style>

</style>