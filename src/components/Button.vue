<script setup lang="ts">
defineProps<{
  ariaLabel: string;
  applyFormatting?: () => void;
}>();
</script>

<template>
  <button type="button" :aria-label="ariaLabel" @click="applyFormatting">
    <slot></slot>
  </button>
</template>
