<template>
  <nav class="navbar">
    <h2>{{ title }}</h2>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: 'Navigation Bar'
    }
  }
}
</script>

<style>
.navbar {
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}
</style>
