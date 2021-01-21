<template>
  <div class="user-playlists">
      <h2>My Playlists</h2>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'

export default {
    setup() {
        const { user } = getUser()
        const { documents: playlists } = getCollection(
            'playlists',
            [ 'userId', '==', user.value.uid ]
            ) 

        console.log(playlists)

        return { playlists }
    }

}
</script>

<style>

</style>