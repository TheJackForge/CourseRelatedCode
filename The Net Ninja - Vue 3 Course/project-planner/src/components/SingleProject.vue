<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="actions">
            <h3 @click="toggleDetails">{{ project.title }}</h3>
            <div class="icons">          
                <span class="material-icons">edit</span>
                <span class="material-icons" @click="deleteItem">delete</span>
                <span class="material-icons tick" @click="toggleComplete">done</span>
            </div>
        </div>
        <div class="details" v-if="showDetails">
            <p> {{ project.details }} </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id     
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        },
        deleteItem() {
            fetch(this.uri,{ method: 'DELETE' })
            .then(() => this.$emit('delete', this.project.id))
            .catch(err => console.log(err.message))
        },
        toggleComplete() {
            fetch(this.uri, { 
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ complete: !this.project.complete })
                }).then( () => {
                    this.$emit('complete', this.project.id)
                }).catch((err) => console.log(err))
        }
    }
}
</script>

<style>

.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}

.material-icons:hover {
    color: #777;
}

h3 {
    cursor: pointer;
}

.project.complete {
    border-left: 4px solid #00ce89;
}

.project.complete .tick {
    color: #00ce89;
}

</style>