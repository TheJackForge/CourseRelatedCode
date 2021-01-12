<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>

import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref( [
      { title: 'welcome to the blog', body: 'bomb wristwatch modem pre- plastic garage artisanal garage katana crypto- hotdog. -ware advert gang man market youtube euro-pop tanto augmented reality sunglasses human. A.I. girl knife soul-delay jeans garage film claymore mine bicycle assassin paranoid. corrupted paranoid receding woman table girl range-rover plastic bomb sunglasses DIY. sub-orbital numinous corporation claymore mine motion geodesic sensory marketing post- bridge media. pistol semiotics long-chain hydrocarbons vehicle systema otaku drugs math- tank-traps physical hacker. disposable San Francisco market tanto otaku urban hotdog advert man render-farm youtube. marketing woman cardboard soul-delay pre- courier motion media carbon military-grade shanty town.', id: 1},
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2},
    ])
  return { posts }
  }
}

</script>
