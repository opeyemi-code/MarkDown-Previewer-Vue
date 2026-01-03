import { reactive, computed } from "vue";
import dayjs from "dayjs";
import { saveAs } from "file-saver";
import type { ComputedRef } from "vue";

/* ---------------- TYPES ---------------- */

export interface Note {
  id: number;
  title: string;
  content: string;
  firstCreated: string;
  lastModified: string;
}

interface MarkdownStore {
  inputValue: string;
  toggleNav: boolean;
  storedMarkdownFiles: Note[];

  toggleNavigation(): void;
  applyFormatting(
    textarea: HTMLTextAreaElement,
    syntaxStart: string,
    syntaxEnd?: string
  ): void;
  handleSaveButton(): void;
  downloadMarkdown(content: string): void;

  stats: ComputedRef<{ lines: number; words: number; characters: number }>;
}

/* ---------------- STORE ---------------- */

export const store: any = reactive<MarkdownStore>({
  inputValue: "",
  toggleNav: false,

  storedMarkdownFiles: JSON.parse(
    localStorage.getItem("storedFiles") || "[]"
  ) as Note[],

  toggleNavigation() {
    store.toggleNav = !store.toggleNav;
  },

  stats: computed(() => {
    const text: string = store.inputValue.trim();

    return {
      lines: text ? text.split("\n").length : 0,
      words: text ? text.split(/\s+/).length : 0,
      characters: store.inputValue.length,
    };
  }),

  applyFormatting(
    textarea: HTMLTextAreaElement,
    syntaxStart: string,
    syntaxEnd: string = syntaxStart
  ) {
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = store.inputValue.slice(start, end);
    const before = store.inputValue.slice(0, start);
    const after = store.inputValue.slice(end);

    store.inputValue = before + syntaxStart + selectedText + syntaxEnd + after;

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.selectionStart = start + syntaxStart.length;
      textarea.selectionEnd = start + syntaxStart.length + selectedText.length;
    });
  },

  handleSaveButton() {
    if (!store.inputValue.trim()) return;

    const formattedDate = dayjs().format("YYYY-MM-DD");

    const note: Note = {
      id: Date.now(),
      title:
        store.inputValue.split("\n")[0].replace(/^#+\s*/, "") || "Untitled",
      content: store.inputValue.trim(),
      firstCreated: formattedDate,
      lastModified: formattedDate,
    };

    store.storedMarkdownFiles.unshift(note);

    localStorage.setItem(
      "storedFiles",
      JSON.stringify(store.storedMarkdownFiles)
    );

    store.inputValue = "";
  },

  downloadMarkdown(content: string) {
    if (!content.trim()) return;

    const fileName = content.split("\n")[0] || "markdown";
    const blob = new Blob([content], {
      type: "text/markdown;charset=utf-8",
    });

    saveAs(blob, `${fileName}.md`);
  },
});
