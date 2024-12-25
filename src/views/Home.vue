<template>
  <main>
    <div>
      <nav class="mdi mdi-home">Home</nav>
      <nav class="mdi mdi-pencil">Edit</nav>
      <nav class="mdi mdi-format-list-checks">List</nav>
      <nav class="mdi mdi-home"></nav>
    </div>

    <h1 class="page-title">Task Manager Lite</h1>

    <!-- Navigation Section -->
    <div class="nav-buttons">
      <button @click="viewSection('taskList')">View Task List</button>
      <button @click="viewSection('createTask')">Create Task</button>
    </div>

    <!-- Task List Section -->
    <div v-if="currentSection === 'taskList'">
      <GetTasks :currentPage="currentPage" :limit="limit" :totalPages="totalPages"
        @update-total-pages="handleUpdateTotalPages" />
      <!-- Pagination Controls -->
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="updatePage(currentPage - 1)">
          Previous
        </button>
        <span>Page {{ currentPage }}</span>
        <button :disabled="currentPage === totalPages" @click="updatePage(currentPage + 1)">
          Next
        </button>
      </div>
    </div>

    <!-- Create Task Section -->
    <div v-if="currentSection === 'createTask'">
      <CreateTask />
    </div>

    <!-- Edit Task Section -->
    <div v-if="currentSection === 'editTask'">
      <UpdateTask />
    </div>

    <!-- View Single Task -->
    <div v-if="currentSection === 'viewTask'">
      <GetTask :taskId="currentTaskId" />
    </div>
  </main>
</template>

<script>
import GetTasks from '../components/GetTasks.vue'
import CreateTask from '../components/CreateTask.vue'
import UpdateTask from '../components/UpdateTask.vue'
import GetTask from '../components/GetTask.vue'

export default {
  name: 'Home',
  components: {
    GetTasks,
    CreateTask,
    UpdateTask,
    GetTask,
  },
  data() {
    return {
      currentSection: 'taskList', // Default section is Task List
      currentTaskId: null, // Store the selected task ID for viewing/editing
      currentPage: 1, // Current pagination page
      totalPages: 1, // Total number of pages (update from API)
      limit: 10, // Number of items per page
    }
  },
  methods: {
    viewSection(section) {
      this.currentSection = section
      if (section === 'viewTask' || section === 'editTask') {
        // Additional logic for setting taskId if viewing/editing a specific task
        this.currentTaskId = 1 // Replace with the actual task ID to view or edit
      }
    },
    updatePage(newPage) {
      if (newPage > 0 && newPage <= this.totalPages) {
        this.currentPage = newPage
      }
    },
    handleUpdateTotalPages(totalPages) {
      this.totalPages = totalPages
    },
  },
}
</script>

<style scoped>
.nav-buttons {
  margin-bottom: 20px;
}

button {
  padding: 10px;
  margin-right: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
