<script setup lang="ts">
import Footer from "../components/Footer.vue";
import SavedFilesEmptyStates from "../components/SavedFilesEmptyStates.vue";
import { store } from "../stores/useMarkdownStore.ts";
import SavedFilesState from "../components/SavedFilesState.vue";
</script>

<template>
  <main
    class="px-4 py-12 flex flex-col items-center justify-center lg:px-[5vw] lg:py-15"
    role="main"
  >
    <SavedFilesEmptyStates v-show="!store.storedMarkdownFiles.length" />
    <SavedFilesState v-show="store.storedMarkdownFiles.length" />
    <Footer />
  </main>
</template>
