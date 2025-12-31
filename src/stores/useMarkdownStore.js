import { reactive, computed } from 'vue'

export const store = reactive({
    inputValue: "",

    handleInput() {
        console.log(store.inputValue)
    },

    stats: computed(() => {
        const text = store.inputValue.trim()

        return {
            lines: text ? text.split("\n").length : 0,
            words: text ? text.split(/\s+/).length : 0,
            characters: store.inputValue.length,
        }
    }),
    // editorToolBar Actions
    applyFormatting(textarea, syntaxStart, syntaxEnd = syntaxStart) {
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = store.inputValue.slice(start, end);
        const before = store.inputValue.slice(0, start);
        const after = store.inputValue.slice(end);

        store.inputValue =
            before + syntaxStart + selectedText + syntaxEnd + after;

        requestAnimationFrame(() => {
            textarea.focus();
            textarea.selectionStart = start + syntaxStart.length;
            textarea.selectionEnd =
                end + syntaxStart.length + selectedText.length;
        });
    },

})
