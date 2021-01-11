<template>
  <h1>Edit Project</h1>
      <form @submit.prevent="handleSubmit">
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
    methods: {
        handleSubmit() {
            fetch(this.uri, { 
                method: 'PATCH',
                body: JSON.stringify({
                    title: this.title,
                    details: this.details
                }),
                headers: { 'Content-Type': 'application/json'}
            })
            .then( (res) => res.json())
            .then(data => console.log(data))
            .then( () => {
                this.$router.push('/')
            }).catch((err) => console.log(err))  
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
button {
    cursor: pointer;
}
</style>