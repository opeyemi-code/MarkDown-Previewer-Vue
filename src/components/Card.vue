<!-- Card.vue -->
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDownload,
  faFileLines,
  faFolderOpen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { store } from "@/stores/useMarkdownStore";

// Strongly typed props
const props = defineProps<{
  id: number;
  title: string;
  firstCreated: string;
  lastModified: string;
}>();

// handle open file button
const handleOpenfile = () => {
  store.openFile(props.id);
};

// handle saved file
const handleSavedMarkdownFile = (e: MouseEvent) => {
  e.preventDefault();
  console.log("Hello");
  store.downloadSavedMarkdwonFile(e, props.id);
};

// Delegate deletion to the store
const handleDelete = (e: MouseEvent) => {
  e.preventDefault();
  store.deleteMarkdownFile(props.id);
};
</script>

<template>
  <li
    class="bg-white rounded-xl p-4 shadow"
    role="article"
    :aria-labelledby="`file-title-${props.id}`"
    :id="`file-${props.id}`"
  >
    <div class="flex items-center gap-2.5">
      <FontAwesomeIcon
        :icon="faFileLines"
        class="w-4 text-blue-600 p-3.5 bg-blue-50 rounded-lg"
        aria-hidden="true"
      />

      <div>
        <h3
          :id="`file-title-${props.id}`"
          class="text-slate-900 font-medium text-[16px]"
        >
          {{ props.title }}
        </h3>

        <p
          v-show="firstCreated === lastModified"
          class="text-sm text-gray-400 mt-1"
        >
          First created:
          <time :datetime="props.firstCreated">
            {{ props.firstCreated }}
          </time>
        </p>
        <p
          v-show="firstCreated !== lastModified"
          class="text-sm text-gray-400 mt-1"
        >
          last modified:
          <time :datetime="props.lastModified">
            {{ props.lastModified }}
          </time>
        </p>
      </div>
    </div>

    <div
      class="mt-3 flex gap-2"
      role="group"
      :aria-label="`Actions for ${props.title}`"
    >
      <RouterLink
        to="/"
        class="bg-blue-600 hover:bg-blue-700 cursor-pointer text-center text-slate-100 flex-1 p-2 rounded-lg"
        @click="handleOpenfile"
      >
        <FontAwesomeIcon
          :icon="faFolderOpen"
          aria-hidden="true"
          className="mr-2"
        />
        Open
      </RouterLink>
      <button
        class="p-2 rounded-lg text-slate-900 cursor-pointer hover:bg-slate-300"
        @click="handleSavedMarkdownFile"
        aria-label="Delete file"
      >
        <FontAwesomeIcon :icon="faDownload" />
      </button>
      <button
        class="p-2 hover:bg-slate-300 rounded-lg text-red-600"
        @click="handleDelete"
        aria-label="Delete file"
      >
        <FontAwesomeIcon :icon="faTrash" />
      </button>
    </div>
  </li>
</template>
