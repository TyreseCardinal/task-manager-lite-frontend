<!-- Navbar.vue -->
<template>
  <header class="navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/create-task">Create Task</router-link>
      <router-link to="/get-tasks">View Tasks</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #4caf50;
  color: white;
  padding: 0px;
}

nav a {
  margin-right: 15px;
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
