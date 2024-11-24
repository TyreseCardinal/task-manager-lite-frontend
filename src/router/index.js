import Vue from 'vue'
import Router from 'vue-router'

// Import components
import GetTasks from '../components/GetTasks.vue'
import CreateTask from '../components/CreateTask.vue'
import UpdateTask from '../components/UpdateTask.vue'
import GetTask from '../components/GetTask.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'get-tasks',
      component: GetTasks, // Display the task list by default
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: CreateTask, // Component for creating a new task
    },
    {
      path: '/tasks/:taskId',
      name: 'get-task',
      component: GetTask, // Component for viewing a single task
    },
    {
      path: '/tasks/:taskId/edit',
      name: 'update-task',
      component: UpdateTask, // Component for editing a task
    },
  ],
})
