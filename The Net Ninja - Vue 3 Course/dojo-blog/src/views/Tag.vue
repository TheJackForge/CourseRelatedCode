<template>
  <div class="tag">
      <div v-if="error"></div>
      <div v-if="posts.length">
          <PostList :posts="postsWithTag" />
      </div>
      <div v-else><Spinner /></div>
  </div>
</template>

<script>

import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    components: { PostList, Spinner },
    setup() {
        const { posts, error, load } = getPosts()
        const route = useRoute()
        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })

        return { error, posts, postsWithTag }
    }
}
</script>

<style>

</style>