<template>
  <div class="main-layout">
    <!-- 左侧导航栏 -->
    <nav class="nav-sidebar">
      <router-link :to="{ name: 'Page1' }">页面1</router-link>
      <router-link :to="{ name: 'Page2' }">页面2</router-link>
    </nav>
    
    <!-- 右侧内容区 -->
    <main class="content-wrapper">
      <router-view/>
    </main>
  </div>
</template>

<style>
.nav-sidebar {
  width: 200px;
  height: 100vh;
  background: #f8f9fa;
  padding: 20px;
  position: fixed;
}

.content-wrapper {
  margin-left: 200px;
  padding: 20px;
  min-height: 100vh;
}
</style>