<template>
  <div v-for="playlist in playlists" :key="playlist.id">
      <div class="single">
          <div class="thumbnail">
              <img :src="playlist.coverUrl">
          </div>
          <div class="info">
              <h3>{{ playlist.title }}</h3>
              <p>Created by {{ playlist.userName }}</p>
          </div>
          <div class="song-number">
              <p>{{ playlist.songs.length }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['playlists']
}
</script>

<style>

</style>