<script setup lang="ts">
import EditorToolbar from "../EditorToolBar.vue";
import Editor from "../Editor.vue";
import LivePreview from "../LivePreview.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <main className="main px-4 pt-14 pb-8 lg:pb-0 lg:px-[5vw]" role="main">
    <EditorToolbar />
    <section
      className="section__flex flex flex-col lg:flex-row lg:gap-5 lg:my-12"
    >
      <Editor />
      <LivePreview />
    </section>
  </main>
  <Footer />
</template>
