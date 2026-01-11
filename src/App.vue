<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper flex flex-col justify-between font-inter">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
