<script setup lang="ts">
import EditorToolbar from "../EditorToolBar.vue";
import Editor from "../Editor.vue";
import LivePreview from "../LivePreview.vue";
import Footer from "../Footer.vue";
import { ref } from "vue";
import { store } from "@/stores/useMarkdownStore.js";

const editorRef = ref<InstanceType<typeof Editor> | null>(null);

function applyFormatting(start: string, end?: string) {
  store.applyFormatting(editorRef.value?.textareaRef, start, end);
}
</script>

<template>
  <main className="main px-4 pt-14 pb-8 lg:pb-0 lg:px-[5vw]" role="main">
    <EditorToolbar :applyFormatting="applyFormatting" />
    <section
      className="section__flex flex flex-col lg:flex-row lg:gap-5 lg:my-12"
    >
      <Editor ref="editorRef" />
      <LivePreview />
    </section>
  </main>
  <Footer />
</template>
