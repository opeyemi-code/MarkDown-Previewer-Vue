<!-- Card.vue -->
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDownload,
  faFileLines,
  faFolderOpen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

defineProps({
  title: String,
  firstCreated: String,
  id: Number,
});
</script>

<template>
  <li
    class="bg-white rounded-xl p-4 shadow"
    role="article"
    :aria-labelledby="`file-title-${id}`"
  >
    <div class="flex items-center gap-2.5">
      <FontAwesomeIcon
        :icon="faFileLines"
        class="w-4 text-blue-600 p-3.5 bg-blue-50 rounded-lg"
        aria-hidden="true"
      />

      <div>
        <h3
          :id="`file-title-${id}`"
          class="text-slate-900 font-medium text-[16px]"
        >
          {{ title }}
        </h3>

        <p class="text-sm text-gray-400 mt-1">
          First created:
          <time :datetime="firstCreated">
            {{ firstCreated }}
          </time>
        </p>
      </div>
    </div>

    <div
      class="mt-3 flex gap-2"
      role="group"
      :aria-label="`Actions for ${title}`"
    >
      <button
        class="bg-blue-600 hover:bg-blue-700 cursor-pointer text-slate-100 flex-1 p-2 rounded-lg"
      >
        <FontAwesomeIcon :icon="faFolderOpen" />
        Open
      </button>

      <button class="p-2 hover:bg-slate-300 rounded-lg">
        <FontAwesomeIcon :icon="faDownload" />
      </button>

      <button class="p-2 hover:bg-slate-300 rounded-lg text-red-600">
        <FontAwesomeIcon :icon="faTrash" />
      </button>
    </div>
  </li>
</template>
