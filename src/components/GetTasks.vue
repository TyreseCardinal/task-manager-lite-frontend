<template>
  <div>
    <h1>Task List</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.completed ? 'Completed' : 'Not Completed' }}
        <button @click="deleteTask(task.id)">Delete</button>
        <button @click="editTask(task.id)">Edit</button>
      </li>
    </ul>
    <button @click="createNewTask">Create New Task</button>
  </div>
</template>

<script>
import axiosInstance from '../axios'

export default {
  data() {
    return {
      tasks: [],
    }
  },
  mounted() {
    this.fetchTasks()
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axiosInstance.get('/tasks')
        this.tasks = response.data
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    },
    async deleteTask(taskId) {
      try {
        await axiosInstance.delete(`/tasks/${taskId}`)
        this.fetchTasks() // Re-fetch tasks after deletion
      } catch (error) {
        console.error('Error deleting task:', error)
      }
    },
    editTask(taskId) {
      this.$router.push({ name: 'update-task', params: { taskId } })
    },
    createNewTask() {
      this.$router.push({ name: 'create-task' })
    },
  },
}
</script>
