<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <footer
    class="bg-white p-8 flex flex-col items-center gap-3 text-slate-500 text-sm lg:text-lg"
  >
    <p>© 2024 MarkdownPro. All rights reserved.</p>
    <p>
      <a
        href="https://www.github.com/opeyemi-code/MarkDown-Previewer"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon :icon="faGithub" class="mr-1" />
        GitHub
      </a>
    </p>
  </footer>
</template>
