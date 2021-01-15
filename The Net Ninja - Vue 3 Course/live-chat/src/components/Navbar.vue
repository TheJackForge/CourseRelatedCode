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

export default {
    setup() {
        const { logout, error } = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('User logged out')
            }
        }

        return { handleClick, user }
    }

}
</script>

<style>

</style>