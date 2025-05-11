<template>
  <button :class="['base-btn', size]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (v) => ['small', 'medium', 'large'].includes(v)
    }
  }
}
</script>

<style scoped>
.base-btn {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.small { padding: 4px 8px; }
.large { padding: 12px 24px; }
</style>
