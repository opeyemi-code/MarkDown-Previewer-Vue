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

defineProps<{
  applyFormatting: (syntaxStart: string, syntaxEnd?: string) => void;
}>();
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
        :applyFormatting="() => applyFormatting('**', '**')"
      >
        <FontAwesomeIcon :icon="faBold" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Italicize text"
        :applyFormatting="() => applyFormatting('_', '_')"
      >
        <FontAwesomeIcon :icon="faItalic" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Add heading"
        :applyFormatting="() => applyFormatting('# ', '')"
      >
        <FontAwesomeIcon :icon="faHeading" class="text-slate-600" />
      </Button>

      <Button
        class="bg-gray-200 hover:bg-gray-300 p-1.5 rounded-md cursor-pointer"
        ariaLabel="Insert list item"
        :applyFormatting="() => applyFormatting('- ', '')"
      >
        <FontAwesomeIcon :icon="faList" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Add hyperlink"
        :applyFormatting="() => applyFormatting('[', '](url)')"
      >
        <FontAwesomeIcon :icon="faLink" class="text-slate-600" />
      </Button>
      <Button
        class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
        ariaLabel="Insert code snippet"
        :applyFormatting="() => applyFormatting('`', '`')"
      >
        <FontAwesomeIcon :icon="faCode" class="text-slate-600" />
      </Button>
    </div>
    <!-- Action Buttons -->
    <div class="flex gap-3" role="group" aria-label="File actions">
      <ButtonWithText
        text="Upload"
        ariaLabel="Upload markdown file"
        class="text-slate-600 hover:bg-slate-200 p-2 rounded-lg cursor-pointer"
      >
        <FontAwesomeIcon :icon="faUpload" />
      </ButtonWithText>
      <ButtonWithText
        text="Save"
        ariaLabel="Save markdown file"
        class="bg-green-600 hover:bg-green-700 text-slate-50 p-2 rounded-md cursor-pointer"
        :handleClick="() => store.handleSaveButton()"
      >
        <FontAwesomeIcon :icon="faSave" />
      </ButtonWithText>
      <ButtonWithText
        text="Download"
        ariaLabel="Download markdown file"
        class="bg-blue-600 hover:bg-blue-700 text-slate-50 p-2 rounded-md cursor-pointer"
        :handleClick="
          () => {
            store.downloadMarkdown(store.inputValue);
          }
        "
      >
        <FontAwesomeIcon :icon="faDownload" class="hidden! md:inline-block!" />
      </ButtonWithText>
    </div>
  </section>
</template>
