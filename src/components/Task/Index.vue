<template>
    <div>
        <router-link :to="{ name: 'home.index' }">Home</router-link>
        <hr>
        <AddTask @add-task="addTask"></AddTask>
        <select @change="filter" v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
        <div v-if="loading">
            <Loader></Loader>
        </div>
        <div v-else-if="filteredTask.length">
            <TaskList
                v-bind:tasks="filteredTask"
                @remove-task="removeTask">
            </TaskList>
        </div>
        <div v-else>
            <p>No task</p>
        </div>
    </div>
</template>

<script>
import TaskList from "@/components/Task/TaskList";
import AddTask from "@/components/Task/AddTask";
import Loader from "@/components/Layouts/Loader";
export default {
    name: 'Index',
    components: {
        AddTask,
        TaskList,
        Loader,
    },

    data() {
        return {
            tasks: [],
            loading: true,
            filter: 'all'
        }
    },

    mounted() {
        this.getTasks()
    },

    computed:{
        filteredTask(){
            if(this.filter === "all"){
                return this.tasks
            }

            if(this.filter === "completed"){
                return this.tasks.filter(t => t.completed)
            }

            if(this.filter === "not-completed"){
                return this.tasks.filter(t => !t.completed)
            }
        }
    },

    methods: {
        getTasks(){
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.json())
                .then(json => {
                    this.loading = false
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

<style scoped>

</style>