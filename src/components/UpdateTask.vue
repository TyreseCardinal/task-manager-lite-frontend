<template>
  <div>
    <h1>Edit Task</h1>
    <form @submit.prevent="submitUpdate">
      <div>
        <label for="title">Task Title:</label>
        <input type="text" v-model="title" id="title" required />
      </div>
      <div>
        <label for="completed">Completed:</label>
        <input type="checkbox" v-model="completed" id="completed" />
      </div>
      <button type="submit">Update Task</button>
    </form>
    <button @click="goBack">Back to Task List</button>
  </div>
</template>

<script>
import axiosInstance from '../axios'

export default {
  data() {
    return {
      taskId: this.$route.params.taskId,
      title: '',
      completed: false,
    }
  },
  async mounted() {
    try {
      const response = await axiosInstance.get(`/tasks/${this.taskId}`)
      this.title = response.data.title
      this.completed = response.data.completed
    } catch (error) {
      console.error('Error fetching task:', error)
    }
  },
  methods: {
    async submitUpdate() {
      try {
        await axiosInstance.put(`/tasks/${this.taskId}`, {
          title: this.title,
          completed: this.completed,
        })
        this.$router.push({ name: 'get-tasks' })
      } catch (error) {
        console.error('Error updating task:', error)
      }
    },
    goBack() {
      this.$router.push({ name: 'get-tasks' })
    },
  },
}
</script>
