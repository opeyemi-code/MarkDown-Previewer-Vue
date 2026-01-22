<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBold,
  faCode,
  faDownload,
  faHeading,
  faItalic,
  faLink,
  faList,
  faSave,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.vue";
import ButtonWithText from "./ButtonWithText.vue";
import { store } from "../stores/useMarkdownStore.js";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

defineProps<{
  applyFormatting: (syntaxStart: string, syntaxEnd?: string) => void;
}>();

// Triger upload button
const uploadFile = () => {
  const inputfileField = document.getElementById("input-file");
  inputfileField?.click();
};

//Handle file Upload
const handleFileInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  if (!file.name.endsWith(".md")) {
    toast.error("Only Markdown (.md) files are supported");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    store.textareaValue = reader.result as string;
    toast.success("Markdown file uploaded successfully");
  };

  reader.readAsText(file);
};
</script>

<template>
  <section
    class="bg-white p-6 rounded-lg flex flex-col gap-4 md:flex-row lg:items-center"
  >
    <!-- formatting Tools -->
    <div class="flex gap-2" role="group" aria-label="Text formatting tools">
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Bold text"
        :handleClick="() => applyFormatting('**', '**')"
      >
        <FontAwesomeIcon :icon="faBold" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Italicize text"
        :handleClick="() => applyFormatting('_', '_')"
      >
        <FontAwesomeIcon :icon="faItalic" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Add heading"
        :handleClick="() => applyFormatting('# ', '')"
      >
        <FontAwesomeIcon :icon="faHeading" class="text-slate-600" />
      </Button>

      <Button
        class="bg-gray-200 hover:bg-gray-300 p-1.5 rounded-md cursor-pointer"
        ariaLabel="Insert list item"
        :handleClick="() => applyFormatting('- ', '')"
      >
        <FontAwesomeIcon :icon="faList" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Add hyperlink"
        :handleClick="() => applyFormatting('[', '](url)')"
      >
        <FontAwesomeIcon :icon="faLink" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Insert code snippet"
        :handleClick="() => applyFormatting('`', '`')"
      >
        <FontAwesomeIcon :icon="faCode" class="text-slate-600" />
      </Button>
    </div>
    <!-- Action Buttons -->
    <div class="flex gap-3" role="group" aria-label="File actions">
      <div>
        <ButtonWithText
          text="Upload"
          ariaLabel="Upload markdown file"
          class="text-slate-600 hover:bg-slate-200 p-2 rounded-lg cursor-pointer"
          :handleClick="
            () => {
              uploadFile();
            }
          "
        >
          <FontAwesomeIcon :icon="faUpload" />
        </ButtonWithText>
        <label htmlFor="input-file">
          <input
            type="file"
            id="input-file"
            class="hidden"
            accept=".md"
            @change="handleFileInput"
          />
        </label>
      </div>
      <ButtonWithText
        text="Save"
        ariaLabel="Save markdown file"
        class="bg-green-600 hover:bg-green-700 text-slate-50 p-2 rounded-md cursor-pointer"
        :handleClick="() => store.displayModal()"
      >
        <FontAwesomeIcon :icon="faSave" />
      </ButtonWithText>
      <ButtonWithText
        text="Download"
        ariaLabel="Download markdown file"
        class="bg-blue-600 hover:bg-blue-700 text-slate-50 p-2 rounded-md cursor-pointer"
        :handleClick="
          () => {
            store.downloadMarkdown(store.textareaValue);
          }
        "
      >
        <FontAwesomeIcon :icon="faDownload" class="hidden! md:inline-block!" />
      </ButtonWithText>
    </div>
  </section>
</template>
