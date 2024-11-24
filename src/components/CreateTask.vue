<template>
  <div>
    <h1>Create New Task</h1>
    <form @submit.prevent="submitTask">
      <div>
        <label for="title">Task Title:</label>
        <input type="text" v-model="title" id="title" required />
      </div>
      <div>
        <label for="completed">Completed:</label>
        <input type="checkbox" v-model="completed" id="completed" />
      </div>
      <button type="submit">Create Task</button>
    </form>
    <button @click="goBack">Back to Task List</button>
  </div>
</template>

<script>
import axiosInstance from '../axios'

export default {
  data() {
    return {
      title: '',
      completed: false,
    }
  },
  methods: {
    async submitTask() {
      try {
        const response = await axiosInstance.post('/tasks', {
          title: this.title,
          completed: this.completed,
        })
        console.log('Task created:', response.data)
        this.$router.push({ name: 'get-tasks' })
      } catch (error) {
        console.error('Error creating task:', error)
      }
    },
    goBack() {
      this.$router.push({ name: 'get-tasks' })
    },
  },
}
</script>
