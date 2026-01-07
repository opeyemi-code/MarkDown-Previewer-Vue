# Markdown Preview App (Vue Edition)

A real-time **Markdown Preview Application** built with **Vue 3** and modern frontend tooling. This project was developed as part of the **AltSchoolAfrica Frontend Engineering Examination** and is a Vue adaptation of the originally issued React-based specification.

---

## 📌 Project Summary

This application allows users to write Markdown content and instantly preview the rendered HTML output. It focuses on **reactivity, accessibility, responsive UI design, error handling, and file operations**, showcasing practical frontend engineering skills using Vue.

---

## 🚀 Live Demo

> 🔗[vue-markdownpro.netlify.app/](https://vue-markdownpro.netlify.app)

---

## 🛠️ Tech Stack (Actual Implementation)

- **Vue 3** – Composition API
- **Vite** – Build tool
- **Vue Router v4** – Client-side routing
- **Markdown Parsing** – `vue-showdown`
- **Styling** – Tailwind CSS
- **Icons** – FontAwesomeIcons
- **State & Persistence** – Vue reactivity + Local Storage
- **File Handling** – Native Browser File APIs
- **Download Library** - File-saver
- **Routing** - Vue Router
- **Date Formatter** - Dayjs

---

## ✨ Implemented Features

### ✅ Core Features

#### 1. Markdown Editor with Real-Time Preview

- Textarea-based Markdown editor
  - Copy markdown content
- Live rendering using `vue-showdown`
- Supports:

  - Headings
  - Paragraphs
  - Bold & Italics
  - Ordered & Unordered Lists
  - Links & Images
  - Inline code & fenced code blocks

#### 2. Responsive Layout

- **Desktop:** Editor and Preview displayed side-by-side
- **Mobile:** Editor stacked above Preview
- Fully responsive using Tailwind CSS

---

### ⚠️ Error Handling

- Custom **404 Not Found Page** for invalid routes

---

### 🎨 UI / UX & Accessibility

- Semantic HTML structure (`<main>`, `<section>`, `<nav>`)
- ARIA labels where applicable
- Keyboard-accessible controls
- Visible focus states
- Consistent spacing, typography, and color scheme
- WCAG-friendly contrast levels

---

## 🌟 Bonus Features Implemented

### 💾 Persistence

- Markdown content is automatically saved to **Local Storage** while typing
- Content is restored on page reload or revisit

---

## 🧪 Routes Overview

| Route          | Description                      |
| -------------- | -------------------------------- |
| `/`            | Main Markdown editor and preview |
| `/saved-files` | Saved Markdown file              |
| `/about`       | About page                       |
| `*`            | Custom 404 page                  |

---

## 📦 Setup Instructions

```bash
# Clone repository
git clone https://github.com/opeyemi-code/markdown-preview-vue.git

# Navigate into directory
cd markdown-preview-vue

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 🧠 Key Takeaways

- Practical usage of Vue 3 Composition API
- Real-time Markdown parsing and rendering
- Browser-based file handling
- Accessibility-first UI design
- Clean and maintainable project structure

---

## 👤 Author

**Obatola Opeyemi Oluwatosin**
Frontend Engineer (Vue & React)

- GitHub: [https://github.com/opeyemi-code](https://github.com/opeyemi-code)
- Email: [opeyemiobatola@gmail.com](mailto:opeyemiobatola@gmail.com)

---

# 📩 AltSchoolAfrica Submission Note

**Project Title:** Markdown Preview App (Vue Edition)

This project is a Vue.js implementation of the Markdown Preview Application examination issued by AltSchoolAfrica. While the original specification referenced React, this solution demonstrates my ability to **translate requirements across frameworks** while preserving functionality, architecture, and UX standards.

The application includes real-time Markdown rendering, responsive layout design, error page, file upload and download functionality, and persistent storage using local storage. Accessibility and semantic HTML were prioritized throughout the implementation.

This project reflects my understanding of modern frontend development principles, Vue 3 best practices, and my ability to build production-ready user interfaces.

Thank you for the opportunity to demonstrate my skills.

**— Obatola Opeyemi Oluwatosin**
