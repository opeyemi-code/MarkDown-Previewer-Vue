import { reactive, computed } from "vue";
import dayjs from "dayjs";
import { saveAs } from "file-saver";

export const store = reactive({
    inputValue: "",

    toggleNavigation() {
        this.toggleNav = !this.toggleNav;
    },


    storedMarkdownFiles: JSON.parse(localStorage.getItem("storedFiles")) || [],


    stats: computed(() => {
        const text = store.inputValue.trim();

        return {
            lines: text ? text.split("\n").length : 0,
            words: text ? text.split(/\s+/).length : 0,
            characters: store.inputValue.length,
        };
    }),

    // Editor toolbar actions
    applyFormatting(textarea, syntaxStart, syntaxEnd = syntaxStart) {
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = this.inputValue.slice(start, end);
        const before = this.inputValue.slice(0, start);
        const after = this.inputValue.slice(end);

        this.inputValue =
            before + syntaxStart + selectedText + syntaxEnd + after;

        requestAnimationFrame(() => {
            textarea.focus();
            textarea.selectionStart = start + syntaxStart.length;
            textarea.selectionEnd =
                start + syntaxStart.length + selectedText.length;
        });
    },


    handleSaveButton() {
        if (!this.inputValue.trim()) return;

        const now = new Date().toISOString();

        const today = dayjs();
        const formattedDate = computed(() => today.format('YYYY-MM-DD'));

        const note = {
            id: Date.now(),
            title:
                this.inputValue
                    .split("\n")[0]
                    .replace(/^#+\s*/, "") || "Untitled",
            content: this.inputValue.trim(),
            firstCreated: formattedDate,
            lastModified: formattedDate
        };

        this.storedMarkdownFiles.unshift(note);

        //save to localStorage

        localStorage.setItem("storedFiles", JSON.stringify(this.storedMarkdownFiles));
        this.inputValue = "";
    },

    // download markdown
    downloadMarkdown(content) {
        if (!content.trim()) return

        const fileName = content.split("\n")[0];
        const blob = new Blob([content], {
            type: "text/markdown;charset=utf-8",
        });
        saveAs(blob, `${fileName}.md`);
    },

});