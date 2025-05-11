<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>
.card {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
}
</style>
