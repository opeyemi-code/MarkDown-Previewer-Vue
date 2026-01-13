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
  textareaValue: string;
  inputFieldValue: string;
  toggleNav: boolean;
  isModalOpen: boolean;
  storedMarkdownFiles: Note[];

  toggleNavigation(): void;
  applyFormatting(
    textarea: HTMLTextAreaElement,
    syntaxStart: string,
    syntaxEnd?: string
  ): void;
  displayModal(): void;
  saveFileTitle(): void;
  closeModal(): void;
  deleteMarkdownFile(id: number): void;
  downloadMarkdown(content: string, title: string): void;
  downloadSavedMarkdwonFile(e: MouseEvent, id: number): void;

  stats: ComputedRef<{ lines: number; words: number; characters: number }>;
}

/* ---------------- STORE ---------------- */

export const store: any = reactive<MarkdownStore>({
  textareaValue: "",
  inputFieldValue: "",
  toggleNav: false,
  isModalOpen: false, // Use a boolean to track state

  storedMarkdownFiles: JSON.parse(
    localStorage.getItem("markdownFiles") || "[]"
  ) as Note[],

  toggleNavigation() {
    store.toggleNav = !store.toggleNav;
  },

  stats: computed(() => {
    const text: string = store.textareaValue.trim();

    return {
      lines: text ? text.split("\n").length : 0,
      words: text ? text.split(/\s+/).length : 0,
      characters: store.textareaValue.length,
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

    const selectedText = store.textareaValue.slice(start, end);
    const before = store.textareaValue.slice(0, start);
    const after = store.textareaValue.slice(end);

    store.textareaValue =
      before + syntaxStart + selectedText + syntaxEnd + after;

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.selectionStart = start + syntaxStart.length;
      textarea.selectionEnd = start + syntaxStart.length + selectedText.length;
    });
  },

  // Handle save button

  displayModal() {
    if (!store.textareaValue) return;
    this.isModalOpen = true;
  },

  closeModal() {
    store.isModalOpen = false;
    store.inputFieldValue = "";
  },

  saveFileTitle() {
    if (!store.textareaValue.trim()) return;

    const formattedDate = dayjs().format("YYYY-MM-DD");

    const note: Note = {
      id: Date.now(),
      title: store.inputFieldValue || "Untitled",
      content: store.textareaValue.trim(),
      firstCreated: formattedDate,
      lastModified: formattedDate,
    };

    store.storedMarkdownFiles.unshift(note);

    localStorage.setItem(
      "markdownFiles",
      JSON.stringify(store.storedMarkdownFiles)
    );

    store.textareaValue = "";
    store.closeModal();
  },

  //Handle file deletion
  deleteMarkdownFile(id) {
    store.storedMarkdownFiles = store.storedMarkdownFiles.filter(
      (file: Note) => file.id !== id
    );
    console.log(store.storedMarkdownFiles);
    localStorage.setItem(
      "markdownFiles",
      JSON.stringify(store.storedMarkdownFiles)
    );
  },

  downloadMarkdown(content: string, title: string) {
    if (!content.trim()) return;

    const fileName = title;
    const blob = new Blob([content], {
      type: "text/markdown;charset=utf-8",
    });

    saveAs(blob, `${fileName}.md`);
  },

  //handle downloading of saved markdownfile
  downloadSavedMarkdwonFile(e, id: number) {
    e.preventDefault();
    const findFile: Note = store.storedMarkdownFiles.find(
      (file: Note) => file.id === id
    );
    if (findFile) {
      store.downloadMarkdown(findFile.content, findFile.title);
    }
  },
});
