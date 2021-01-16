<template>
  <div class="chat-window">
      <div v-if="error"> {{ error }} </div>
      <div v-if="documents" class="messages">
            <div v-for ="doc in documents" :key="doc.id" class="single">
                <span class="created-at"> {{ doc.createdAt.toDate() }} </span>
                <span class="name"> {{ doc.name }} </span>
                <span class="message"> {{ doc.message }} </span>
            </div>
      </div>
  </div>
</template>

<script>

import getCollection from '../composables/getCollection'

export default {
    setup() {
        const { error, documents } = getCollection('messages')

        return { error, documents }
    }
}
</script>

<style>

</style>