<template>
    <form>
        <input v-model="taskText" type="text">
        <button @click.prevent="addTask" type="submit">Create</button>
    </form>
</template>

<script>
export default {
    name: "AddTask",

    data(){
        return{
            taskText: ''
        }
    },

    methods: {
        addTask(){
            if(this.taskText.trim()){
                this.$emit('add-task', this.taskText)
                this.taskText = ''
            }
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
        margin-bottom: 2rem;
    }

    input{
        width: 200px;
    }
</style>