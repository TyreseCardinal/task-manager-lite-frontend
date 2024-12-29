<template>
  <main>
    <div class="get-tasks">
      <h2>Task List</h2>
      <div class="filters">
        <label for="status">Filter by Status:</label>
        <select v-model="filterStatus" @change="fetchTasks">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div class="task-list">
        <div v-for="task in tasks" :key="task.id" class="task">
          <h3>{{ task.title }}</h3>
          <p>Status: {{ task.completed ? 'Completed' : 'Pending' }}</p>
          <router-link :to="'/tasks/' + task.id">
            <button>View</button>
          </router-link>
        </div>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <button @click="nextPage" :disabled="page === totalPages">Next</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      page: 1,
      totalPages: 1,
      filterStatus: 'all',
    }
  },
  methods: {
    async fetchTasks() {
      const response = await this.$axios.get('/tasks', {
        params: { page: this.page, limit: 10 },
      })
      this.tasks = response.data.tasks
      this.totalPages = response.data.totalPages
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++
        this.fetchTasks()
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--
        this.fetchTasks()
      }
    },
  },
  mounted() {
    this.fetchTasks()
  },
}
</script>

<style scoped>
.task-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.task {
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pagination {
  margin-top: 20px;
}
</style>
