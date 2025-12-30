<script setup lang="ts">
defineProps<{
  ariaLabel: string;
}>();
</script>

<template>
  <button type="button" :aria-label="ariaLabel">
    <slot></slot>
  </button>
</template>
