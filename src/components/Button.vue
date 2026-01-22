<script setup lang="ts">
defineProps<{
  ariaLabel: string;
  handleClick?: () => void;
}>();
</script>

<template>
  <button type="button" :aria-label="ariaLabel" @click="handleClick">
    <slot></slot>
  </button>
</template>
