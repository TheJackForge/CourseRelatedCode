<template>
  <h1>Edit Project</h1>
      <form>
        <label>Title:</label>
        <input type="text" required v-model="title">
        <label>Details:</label>
        <textarea required v-model="details"></textarea>
        <button>Update Project</button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            uri: 'http://localhost:3000/projects/' + this.id
        }
    },
    mounted() {
        fetch(this.uri)
            .then(res => res.json())
            .then(data => {
                this.title = data.title
                this.details = data.details
            })
    }
}
</script>

<style>

</style>