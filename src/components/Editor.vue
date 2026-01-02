<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
import { store } from "../stores/useMarkdownStore.js";

const textareaRef = ref<HTMLTextAreaElement | null>(null);

defineExpose({
  textareaRef,
});
</script>

<template>
  <form
    class="bg-[#e2e8f0] my-6 border border-slate-500 rounded-lg flex flex-col lg:w-1/2 lg:my-0"
    aria-label="Markdown editor form"
    role="form"
  >
    <fieldset class="h-full" aria-labelledby="editor-title" role="group">
      <legend class="border-b border-slate-500 flex justify-between w-full p-4">
        <div class="editor__header flex items-center gap-2">
          <FontAwesomeIcon :icon="faPenToSquare" aria-hidden="true" />
          <h2 id="editor-title" class="editor__header-title">
            Markdown Editor
          </h2>
        </div>

        <!-- Success message  -->
        <p aria-live="polite" role="status" class="hidden">
          <FontAwesomeIcon
            :icon="faCheck"
            class="success-message__icon"
            aria-hidden="true"
          />
          <!-- File saved -->
        </p>

        <div class="flex gap-4 text-slate-500">
          <h6>
            Line: <span aria-label="">{{ store.stats.lines }}</span>
          </h6>
          <h6 class="editor__sub-text editor__word">
            Words:
            <span class="editor__word-count" aria-label="">
              {{ store.stats.words }}
            </span>
          </h6>
        </div>
      </legend>

      <textarea
        ref="textareaRef"
        v-model.trim="store.inputValue"
        class="editor__textarea bg-white text-sm w-full h-full p-4 outline-0 caret-black text-neutral-800 flex-1 rounded-b-lg"
        placeholder="# Welcome to MarkdownPro 
Start typing your markdown here..."
        cols="30"
        rows="16"
        autoFocus
        aria-label="Markdown input area"
        role="textbox"
      ></textarea>
    </fieldset>
  </form>
</template>
>
