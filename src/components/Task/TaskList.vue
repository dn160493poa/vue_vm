<template>
    <div>
        <ul>
            <TaskItem
                @remove-task="removeTask"
                v-for="(task, id) in tasks"
                v-bind:index="id"
                v-bind:task="task"></TaskItem>
        </ul>
    </div>
</template>

<script>
import TaskItem from "@/components/Task/TaskItem";
export default {
    name: "TaskList",
    props: ['tasks'],
    components: {
        TaskItem
    },

    methods:{
        removeTask(id){
            this.$emit('remove-task', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>