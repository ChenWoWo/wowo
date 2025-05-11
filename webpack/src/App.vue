<template>
  <!-- 仅作为路由出口 -->
  <router-view/>
</template>

<style>
.app-container {
  display: flex;
  height: 100vh;
}

.side-nav {
  width: 200px;
  background: #f0f2f5;
  padding: 20px;
  border-right: 1px solid #e8e8e8;
}

.side-nav a {
  display: block;
  padding: 10px;
  margin-bottom: 8px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
}

.side-nav a.router-link-exact-active {
  background: #007bff;
  color: white;
}

.content-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>

<script>
export default {
  name: 'App'
}
</script>
