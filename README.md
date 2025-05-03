# React Budget Calculator

A responsive and scalable budget calculator built with **React**, **TailwindCSS**, and **React Router**.  
This app aims to streamline the process of estimating website development costs based on selected services, using a more interactive interface than traditional forms.

🌐 **Live Demo**: [react-budget-calculator.vercel.app](https://react-budget-calculator-drab.vercel.app/)

---

## 🛠 Tech Stack

- React + Vite
- TypeScript
- TailwindCSS
- React Router DOM
- Local Storage
- useEffect, useState, useSearchParams
- Aesthetic UI with tooltips, modals, and real-time validation

---

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
- View budget details in a modal.
- Share budget via a copy-to-clipboard URL button.
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