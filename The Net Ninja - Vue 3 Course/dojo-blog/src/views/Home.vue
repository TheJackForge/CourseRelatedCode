<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" v-model="search">
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>

import { computed, ref, watch, watchEffect  } from 'vue'

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref( ['mario', 'luigi', 'yoshi', 'toad', 'peach', 'bowser', 'daisy', 'koopa'])

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
    console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed( () => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { names, search, matchingNames, handleClick }
    }   
}

</script>
