<script setup lang="ts">
import Footer from "../Footer.vue";
import SavedFilesEmptyStates from "../SavedFilesEmptyStates.vue";
import { store } from "../../stores/useMarkdownStore";
import SavedFiles from "../SavedFiles.vue";
</script>

<template>
  <main
    className="px-4 py-12 flex flex-col items-center justify-center lg:px-[5vw] lg:py-15"
    role="main"
  >
    <SavedFilesEmptyStates v-show="!store.storedMarkdownFiles.length" />
    <SavedFiles v-show="store.storedMarkdownFiles.length" />
    <Footer />
  </main>
</template>
