<script setup lang="ts">
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "@/stores/useMarkdownStore.js";
import { VueShowdown } from "vue-showdown";
</script>

<template>
  <article
    class="bg-[#e2e8f0] border border-slate-500 rounded-lg h-125 lg:w-1/2 flex flex-col"
    aria-labelledby="live-preview-title"
    role="region"
  >
    <!-- Header for the preview section -->
    <header class="border-b border-slate-500 flex items-center gap-2 p-4">
      <FontAwesomeIcon :icon="faEye" aria-hidden="true" />
      <h2 id="live-preview-title">Live Preview</h2>
    </header>

    <!-- Markdown render area -->
    <section
      class="prose max-w-none overflow-y-scroll h-full bg-white p-4 rounded-b-lg lg:flex-1"
      aria-live="polite"
      aria-label="Rendered Markdown Preview"
    >
      <!-- v-model binds the editor to the store input -->
      <p v-if="store.inputValue.length < 1" className="live-preview__result">
        Start typing to see your markdown rendered live.
      </p>
      <VueShowdown :markdown="store.inputValue" flavor="github" />
    </section>
  </article>
</template>
