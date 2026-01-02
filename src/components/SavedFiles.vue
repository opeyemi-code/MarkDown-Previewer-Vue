<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "vue-router";
import Card from "./Card.vue";
import { store } from "../stores/useMarkdownStore";
</script>

<template>
  <main class="px-4 pt-14 w-full" role="region">
    <header class="flex flex-col lg:flex-row justify-between gap-4">
      <div>
        <h2 class="text-slate-900 font-semibold text-xl mb-1">
          Saved Markdown Files
        </h2>
        <p class="text-gray-500">Manage your saved documents</p>
      </div>

      <div class="flex flex-col gap-3" role="search">
        <label for="search-input" class="hidden"> Search saved files </label>

        <div class="relative">
          <FontAwesomeIcon
            :icon="faSearch"
            class="absolute left-2 top-2.5 text-gray-400"
          />
          <input
            id="search-input"
            type="search"
            class="bg-white w-full rounded-lg py-2 px-8 outline-none"
            placeholder="Search here..."
          />
        </div>

        <RouterLink
          to="/"
          class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-center"
        >
          <FontAwesomeIcon :icon="faPlus" />
          New File
        </RouterLink>
      </div>
    </header>

    <div class="my-8">
      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          v-for="file in store.storedMarkdownFiles"
          :key="file.id"
          :id="file.id"
          :title="file.title"
          :firstCreated="file.firstCreated"
        />
      </ul>
    </div>
  </main>
</template>
