<template>
    <li>
        <span v-bind:class="{done: task.completed}">
            <input type="checkbox" @change="changeTaskState">
            <strong>{{index + 1}}</strong>
            {{ taskText }}
        </span>
        <button @click="deleteTask" class="rm"> &times;</button>
    </li>
</template>

<script>
export default {
    name: "TaskItem",
    props: {
        task: {
            type: Object,
            required: true
        },
        index: Number
    },

    computed: {
        taskText() {
            return this.task.title.toUpperCase()
        }
    },


    methods: {
        changeTaskState(){
            this.task.completed = !this.task.completed
        },

        deleteTask(){
            this.$emit('remove-task', this.task.id)
        }
    }
}
</script>

<style scoped>
    li{
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem .2rem;
        margin-bottom: 1rem;
    }

    .rm{
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    input{
        margin-right: 1rem;
    }

    .done{
        text-decoration: line-through;
    }
</style>