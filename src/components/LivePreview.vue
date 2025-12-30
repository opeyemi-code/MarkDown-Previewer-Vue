<script setup lang="ts">
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <article
    className="bg-[#e2e8f0] border border-slate-500 rounded-lg h-125 lg:w-1/2 flex flex-col"
    aria-labelledby="live-preview-title"
    role="region"
  >
    <!-- Header for the preview section  -->
    <header className="border-b border-slate-500 flex items-center gap-2 p-4">
      <FontAwesomeIcon :icon="faEye" aria-hidden="true" />
      <h2>Live Preview</h2>
    </header>
    <!-- Markdown render area -->
    <section
      className="prose max-w-none overflow-y-scroll h-full bg-white p-4 rounded-b-lg lg:flex-1"
      aria-live="polite"
      aria-label="Rendered Markdown Preview"
    >
      <p className="live-preview__result">
        Start typing to see your markdown rendered live.
      </p>
    </section>
  </article>
</template>
