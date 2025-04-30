## 📦 Dependencies

This project uses the following major dependencies to build a fast, maintainable, and modern web application:

### ⚛️ React
- **Library:** `react`, `react-dom`
- **Purpose:** Build component-based user interfaces.
- **Why:** Offers fast rendering with a virtual DOM and reusable UI components.

### ⚡ Vite
- **Library:** `vite`
- **Purpose:** Next-generation frontend tooling.
- **Why:** Extremely fast dev server with Hot Module Replacement (HMR) and lightning-fast production builds.

### 🎨 Tailwind CSS
- **Library:** `tailwindcss`, `postcss`, `autoprefixer`
- **Purpose:** Utility-first CSS framework.
- **Why:** Enables rapid UI development with a consistent design system and responsive utilities.

### 🔤 Google Fonts
- **Used via:** `<link>` tag in `index.html` or `@import` in CSS
- **Purpose:** Custom typography.
- **Why:** Enhances visual identity and readability with clean, global-friendly fonts.

### 🔧 ESLint & Prettier *(Optional but Recommended)*
- **Library:** `eslint`, `prettier`, `eslint-plugin-react`
- **Purpose:** Code linting and formatting.
- **Why:** Keeps code clean, readable, and consistent.

### 🧪 Vitest *(Optional for testing)*
- **Library:** `vitest`, `@testing-library/react`
- **Purpose:** Unit testing framework (if used).
- **Why:** Fast test execution with modern syntax compatible with Vite.

---

### 📁 DevDependencies (from `package.json`)

```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-dom": "^18.x.x"
  },
  "devDependencies": {
    "vite": "^5.x.x",
    "tailwindcss": "^3.x.x",
    "postcss": "^8.x.x",
    "autoprefixer": "^10.x.x"
  }
}


