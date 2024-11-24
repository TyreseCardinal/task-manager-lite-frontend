<template>
  <div class="home">
    <h1>Task Manager Lite</h1>
    <AddTask @add-task="addTask" />
    <TaskList :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script>
import AddTask from '../components/AddTask.vue'
import TaskList from '../components/TaskList.vue'

export default {
  name: 'Home',
  components: { AddTask, TaskList },
  data() {
    return {
      tasks: [], // Holds the list of tasks
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task) // Adds a task to the array
    },
    deleteTask(index) {
      this.tasks.splice(index, 1) // Removes a task by index
    },
  },
}
</script>

<style>
/* Add styling for the Home page */
</style>
