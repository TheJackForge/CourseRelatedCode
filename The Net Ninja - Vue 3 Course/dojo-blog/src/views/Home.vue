<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
    <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>

import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref( [] )
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

  load()

  const showPosts = ref(true)

  return { posts, showPosts, error }
  }
}

</script>
