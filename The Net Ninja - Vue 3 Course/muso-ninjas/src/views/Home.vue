<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'

export default {
  name: 'Home',
  setup() {
    
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  }
  
}
</script>
