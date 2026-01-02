<script setup lang="ts">
defineProps<{
  text: string;
  ariaLabel: string;
  handleClick?: () => void;
}>();
</script>

<template>
  <button type="button" :aria-label="ariaLabel" @click="handleClick">
    <slot></slot>
    {{ text }}
  </button>
</template>
