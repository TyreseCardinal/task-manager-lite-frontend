import Vue from 'vue'
import Router from 'vue-router'

// Import components
import GetTasks from '../components/GetTasks.vue'
import CreateTask from '../components/CreateTask.vue'
import UpdateTask from '../components/UpdateTask.vue'
import GetTask from '../components/GetTask.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, // Home view is now the default route
    },
    {
      path: '/get-tasks',
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

// Suppress NavigationDuplicated errors
const originalPush = router.push
router.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => {
    if (err.name !== 'NavigationDuplicated') {
      throw err
    }
  })
}

export default router
