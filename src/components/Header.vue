<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderNav from "./HeaderNav.vue";
import { store } from "../stores/useMarkdownStore.js";
</script>

<template>
  <header
    className="header bg-white flex justify-between items-center px-4 py-4 border-b relative border-[#e5e7eb] lg:px-[5vw]"
  >
    <div className="header__logo-wrapper flex gap-2">
      <img
        src="/markdown.png"
        alt="MarkdownPro Logo"
        className="header__logo w-3.75 h-7 lg:w-9 lg:h-auto"
      />
      <div className="header__info flex flex-col justify-center">
        <h1 className="header__title text-2xl text-slate-900 font-bold">
          MarkdownPro
        </h1>
        <p
          className="header__description text-[12px] hidden lg:block lg:text-sm text-gray-400"
        >
          Professional Editor
        </p>
      </div>
    </div>

    <button
      className="btn header__hamburger-btn lg:hidden bg-[#E5E7EB] p-1.5 cursor-pointer"
      aria-label=""
      aria-controls="main-navigation"
      @click="store.toggleNavigation()"
    >
      <FontAwesomeIcon :icon="faBars" className="hamburger-menu" />
    </button>
    <HeaderNav />
  </header>
</template>
