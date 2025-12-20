<script setup lang="ts">
import { ref } from "vue";

const person = ref("John Doe");
</script>

<template>
  <h1 class="text-red-400">Hello, {{ person }}</h1>
  <p class="text-red-900">Testing something...</p>
</template>

<style scoped></style>
