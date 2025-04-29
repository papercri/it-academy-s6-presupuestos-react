# Web Budget Calculator App

This is a React application built to streamline the process of calculating website project budgets. It improves user interaction compared to previous static versions by utilizing checkboxes, inputs, buttons, tooltips, modals, and live form validation.

## 🚀 Live Features

- Built with **React**, **TailwindCSS**, **React Router**, `useEffect`, `useState`, and `localStorage`.
- Functional, reusable, and responsive components.
- Real-time total updates based on user selections.
- Tooltip explanations and modals for user guidance and confirmation.
- Form validation while the form is being used (not just on submit).
- Budgets saved persistently in `localStorage`.

## 🔧 Installation

```bash
git clone https://github.com/papercri/it-academy-s6-presupuestos-react.git
cd it-academy-s6-presupuestos-react
npm install
npm run dev
```

## 🧮 Functionality

### `/budget` page
- Users can select services (SEO, Ads, Web) and add details (number of pages and languages).
- Optionally apply a 20% discount with a toggle switch for an annual subscription.
- Form fields (`name`, `email`, and services) can be pre-filled via URL parameters:
  ```bash
  /budget?name=cris&email=cris@cris.com&seo=true&web=true&ads=false&discount=true&pages=3&languages=2
  ```

### `/progress` page
- Displays all saved budgets.
- Search by client name.
- Sort by client name or date (ascending/descending).
- Delete individual budgets or clear all.
- Filters can be preset via URL:
  ```bash
  /progress?search=cris&sortName=asc&sortDate=asc
  ```

## 🧩 Component Architecture

- Modular and reusable component design.
- Responsive layout using TailwindCSS.
- Clean structure encourages:
  - **Maintainability**
  - **Component reusability**
  - **Testability**
  - **Scalability**

## 📱 Responsive Design

All components and pages are fully responsive and work seamlessly on various screen sizes.

---

Made with ❤️ by [@papercri](https://github.com/papercri)