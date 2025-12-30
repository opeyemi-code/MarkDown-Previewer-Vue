<script setup lang="ts">
defineProps<{
  text: string;
  ariaLabel: string;
}>();
</script>

<template>
  <button type="button" :aria-label="ariaLabel">
    <slot></slot>
    {{ text }}
  </button>
</template>
