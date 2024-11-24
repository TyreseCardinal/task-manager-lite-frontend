<template>
  <div>
    <h1>Task Manager</h1>

    <!-- Navigation Section -->
    <div class="nav-buttons">
      <button @click="viewSection('taskList')">View Task List</button>
      <button @click="viewSection('createTask')">Create Task</button>
    </div>

    <!-- Task List Section -->
    <div v-if="currentSection === 'taskList'">
      <GetTasks />
    </div>

    <!-- Create Task Section -->
    <div v-if="currentSection === 'createTask'">
      <CreateTask />
    </div>

    <!-- Edit Task Section (view/edit specific task) -->
    <div v-if="currentSection === 'editTask'">
      <UpdateTask />
    </div>

    <!-- View Single Task -->
    <div v-if="currentSection === 'viewTask'">
      <GetTask :taskId="currentTaskId" />
    </div>
  </div>
</template>

<script>
import GetTasks from './components/GetTasks.vue'
import CreateTask from './components/CreateTask.vue'
import UpdateTask from './components/UpdateTask.vue'
import GetTask from './components/GetTask.vue'

export default {
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
  },
}
</script>

<style scoped>
/* Styling for navigation buttons */
.nav-buttons {
  margin-bottom: 20px;
}

button {
  padding: 10px;
  margin-right: 10px;
}
</style>
