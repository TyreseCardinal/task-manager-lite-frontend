<template>
  <div>
    <h1>Task Details</h1>
    <div v-if="task">
      <p><strong>Title:</strong> {{ task.title }}</p>
      <p>
        <strong>Status:</strong>
        {{ task.completed ? 'Completed' : 'Not Completed' }}
      </p>
      <p><strong>Created At:</strong> {{ task.created_at }}</p>
      <p><strong>Updated At:</strong> {{ task.updated_at }}</p>
      <button @click="goBack">Back to Task List</button>
    </div>
    <div v-else>
      <p>Loading task details...</p>
    </div>
  </div>
</template>

<script>
import axiosInstance from '../axios'

export default {
  data() {
    return {
      task: null,
      taskId: this.$route.params.taskId,
    }
  },
  async mounted() {
    try {
      const response = await axiosInstance.get(`/tasks/${this.taskId}`)
      this.task = response.data
    } catch (error) {
      console.error('Error fetching task details:', error)
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'get-tasks' })
    },
  },
}
</script>
