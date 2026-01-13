<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { store } from "@/stores/useMarkdownStore";
import { ref, watch } from "vue";
import ButtonWithText from "./ButtonWithText.vue";

const dialogRef = ref<HTMLDialogElement | null>(null);
const inputRef = ref<HTMLTextAreaElement | null>(null);

defineExpose({
  // dialogRef,
  inputRef,
});
watch(
  () => store.isModalOpen,
  (isOpen) => {
    if (isOpen) {
      dialogRef.value?.showModal();
    } else {
      dialogRef.value?.close();
    }
  }
);
</script>

<template>
  <dialog
    ref="dialogRef"
    class="bg-white p-5 mx-auto w-100 rounded-xl lg:w-md my-auto"
    aria-label="Dialog"
  >
    <header class="flex items-center justify-between">
      <h1 class="text-xl text-[#111827] font-semibold lg:text-2xl">
        Save Markdown File
      </h1>
      <button
        @click="() => store.closeModal()"
        class="p-2 hover:cursor-pointer"
        aria-label="Close"
      >
        <FontAwesomeIcon
          :icon="['fas', 'xmark']"
          class="text-slate-500 text-xl hover:text-slate-700"
        />
      </button>
    </header>
    <h2 class="text-sm text-slate-500 font-normal my-3 tracking-tighter">
      Enter a title for your file
    </h2>
    <form>
      <label htmlFor="file-title" class="text-sm text-[#111827] font-semibold">
        File Title
        <input
          id="file-title"
          ref="inputRef"
          v-model.trim="store.inputFieldValue"
          class="block mt-2 border-blue-600 border px-5 py-5 rounded-lg w-full text-[1rem] text-neutral-800 font-normal outline-0 caret-[#111827]"
          type="text"
          autoFocus
          placeholder="e.g. My Markdown Notes"
        />
      </label>
      <div class="flex flex-col gap-4 mt-8 mb-4 lg:flex-row-reverse">
        <ButtonWithText
          text="Save"
          :handleClick="() => store.saveFileTitle()"
          ariaLabel="Save Markdown"
          class="bg-blue-600 py-4 rounded-lg text-white text-sm font-medium tracking-tighter w-full hover:bg-blue-500 hover:cursor-pointer"
        >
          <FontAwesomeIcon :icon="faFloppyDisk" />
        </ButtonWithText>
        <button
          type="button"
          class="bg-white text-[#374151] py-4 border border-slate-500 rounded-lg w-full hover:bg-[#FAF9F6] hover:cursor-pointer"
          @click="() => store.closeModal()"
          aria-label="Cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  </dialog>
</template>
