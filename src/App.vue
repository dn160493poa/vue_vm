<template>
    <h1>TASK APPLICATION</h1>
    <router-view></router-view>
</template>

<script>
import TaskList from "@/components/Task/TaskList";
import AddTask from "@/components/Task/AddTask";
export default {
    name: 'App',
    components: {
        AddTask,
        TaskList
    },

    data() {
        return {
            tasks: []
        }
    },

    mounted() {
        this.getTasks()
    },

    methods: {
        getTasks(){
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.json())
                .then(json => {
                    this.tasks = json
                })
        },

        removeTask(id) {
            this.tasks = this.tasks.filter(t => t.id !== id)
        },

        addTask(text) {
            this.tasks.push({id: Date.now(), title: text, completed:false})
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
