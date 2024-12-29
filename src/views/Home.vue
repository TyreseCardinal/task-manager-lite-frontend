<template>
  <div class="home">
    <h1>Welcome to Task Manager Lite</h1>
    <p>Manage your tasks efficiently and effectively.</p>
    <div class="buttons">
      <router-link to="/create-task">
        <button>Create Task</button>
      </router-link>
      <router-link to="/get-tasks">
        <button>View Tasks</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: $primary-color;
}

p {
  font-size: 1.25rem;
  margin-bottom: 30px;
  color: $secondary-color;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
