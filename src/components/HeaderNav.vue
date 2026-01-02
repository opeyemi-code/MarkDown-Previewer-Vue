<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { store } from "../stores/useMarkdownStore.js";
</script>

<template>
  <nav
    :class="[
      store.toggleNav ? 'block' : 'hidden',
      'lg:block absolute top-full left-0 w-full bg-white border-t border-[#e5e7eb] px-4 py-2 lg:py-0 lg:static lg:border-0 lg:w-auto lg:px-0',
    ]"
    role="navigation"
    aria-label="Primary Navigation"
  >
    <ul class="nav__list flex justify-between gap-5" role="menubar">
      <li class="nav__item" role="none">
        <RouterLink
          to="/"
          role="menuitem"
          aria-current=""
          class="nav__link text-sm text-slate-700 font-medium lg:text-lg"
        >
          Home
        </RouterLink>
      </li>

      <li class="nav__item" role="none">
        <RouterLink
          to="/saved-files"
          role="menuitem"
          aria-current=""
          class="nav__link text-sm text-slate-700 font-medium lg:text-lg"
        >
          Saved Files
        </RouterLink>
      </li>

      <li class="nav__item" role="none">
        <RouterLink
          to="/about"
          role="menuitem"
          aria-current=""
          class="nav__link text-sm text-slate-700 font-medium lg:text-lg"
        >
          About
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
