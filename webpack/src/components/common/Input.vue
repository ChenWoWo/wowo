<template>
  <input 
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="base-input"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: [String, Number],
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>
