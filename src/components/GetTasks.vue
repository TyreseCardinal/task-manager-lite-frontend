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
  </div>
</template>

<script>
import axiosInstance from '../axios'

export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      tasks: [], // Stores the list of tasks for the current page
    };
  },
  watch: {
    currentPage: {
      immediate: true, // Trigger fetch when the component is mounted
      handler() {
        this.fetchTasks();
      },
    },
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axiosInstance.get('/tasks', {
          params: {
            page: this.currentPage,
            limit: this.limit,
          },
        });
        this.tasks = response.data.tasks; // Update tasks with fetched data
        // Emit the new total pages to the parent component
        this.$emit('update-total-pages', response.data.totalPages);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async deleteTask(taskId) {
      try {
        await axiosInstance.delete(`/tasks/${taskId}`);
        this.fetchTasks(); // Re-fetch tasks after deletion to update the list
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    editTask(taskId) {
      // Navigation logic to edit task
      this.$emit('edit-task', taskId);
    },
  },
};
</script>
