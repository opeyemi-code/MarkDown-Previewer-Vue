import { reactive, computed } from "vue";
import dayjs from "dayjs";
import { saveAs } from "file-saver";
import type { ComputedRef } from "vue";
import { toast } from "vue3-toastify";

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
    syntaxEnd?: string,
  ): void;
  displayModal(): void;
  saveFileTitle(): void;
  closeModal(): void;
  openFile(id: number): void;
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
    localStorage.getItem("markdownFiles") || "[]",
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
    syntaxEnd: string = syntaxStart,
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

    const dateNow = Date.now();
    const formattedDate = dayjs(dateNow).format("DD-MM-YYYY hh:mm a");
    const activeFileID = localStorage.getItem("activeFileID");

    if (activeFileID !== null) {
      const index = store.storedMarkdownFiles.findIndex(
        (file: Note) => file.id === Number(activeFileID),
      );

      if (index !== -1) {
        const original = store.storedMarkdownFiles[index];

        const updated: Note = {
          ...original,
          title: store.inputFieldValue || original.title,
          content: store.textareaValue.trim(),
          lastModified: formattedDate,
        };

        store.storedMarkdownFiles.splice(index, 1);
        store.storedMarkdownFiles.unshift(updated);
      }

      store.textareaValue = "";
      localStorage.removeItem("activeFileID");
    } else {
      const markdownfile: Note = {
        id: Date.now(),
        title: store.inputFieldValue || "Untitled",
        content: store.textareaValue.trim(),
        firstCreated: formattedDate,
        lastModified: formattedDate,
      };

      store.storedMarkdownFiles.unshift(markdownfile);
    }
    // Persist once
    localStorage.setItem(
      "markdownFiles",
      JSON.stringify(store.storedMarkdownFiles),
    );

    store.closeModal();
    toast.success("Markdown file saved successfully");
  },

  openFile(id) {
    const findFile: Note = store.storedMarkdownFiles.find(
      (file: Note) => file.id === id,
    );
    store.textareaValue = findFile.content;
    localStorage.setItem("activeFileID", String(findFile.id));
  },

  //Handle file deletion
  deleteMarkdownFile(id) {
    store.storedMarkdownFiles = store.storedMarkdownFiles.filter(
      (file: Note) => file.id !== id,
    );
    localStorage.setItem(
      "markdownFiles",
      JSON.stringify(store.storedMarkdownFiles),
    );
  },

  downloadMarkdown(content: string, title: string) {
    if (!content.trim()) return;

    const fileName = title || "Untitled";
    const blob = new Blob([content], {
      type: "text/markdown;charset=utf-8",
    });

    saveAs(blob, `${fileName}.md`);
  },

  //handle downloading of saved markdownfile
  downloadSavedMarkdwonFile(e, id: number) {
    e.preventDefault();
    const findFile: Note = store.storedMarkdownFiles.find(
      (file: Note) => file.id === id,
    );
    if (findFile) {
      store.downloadMarkdown(findFile.content, findFile.title);
    }
  },
});
