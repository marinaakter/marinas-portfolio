# React + Tailwind Boilerplate

A clean and scalable **React + Vite + TailwindCSS boilerplate** for building modern web applications like **agency websites, SaaS landing pages, dashboards, and portfolios**.

This template includes a **well-organized folder structure, routing setup, reusable UI components, and API configuration** to help you start projects faster without repeating setup every time.

---

# 🚀 Tech Stack

* **React**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Axios**
* **Framer Motion**
* **React Icons**
* **ESLint**
* **Prettier**

---

# ✨ Features

* ⚡ Vite for fast development
* 🎨 Tailwind CSS preconfigured
* 📁 Clean and scalable folder structure
* 🧭 React Router ready
* 🧩 Reusable UI components
* 🔗 Axios API setup
* ⚙️ Environment variable support
* 🧹 ESLint + Prettier configuration
* 🧱 Layout system (Navbar + Footer)

---

# 📁 Project Structure

```
src
│
├── assets
│   ├── icons
│   ├── images
│   └── fonts
│
├── components
│   ├── layout
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── ui
│       ├── Button.jsx
│       ├── Container.jsx
│       └── SectionTitle.jsx
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
│
├── routes
│   └── router.jsx
│
├── services
│   └── api.js
│
├── hooks
├── context
├── utils
│   ├── cn.js
│   └── constants.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Getting Started

### 1. Clone the repository

```
git clone https://github.com/marinaakter/SaaS-react-tailwind-boilerplate.git
```

### 2. Navigate to the project folder

```
cd react-tailwind-boilerplate
```

### 3. Install dependencies

```
npm install
```

or

```
yarn
```

### 4. Start development server

```
npm run dev
```

---

# 🌐 Environment Variables

Create a `.env` file in the root directory.

Example:

```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Demo App
```

Use inside code:

```
import.meta.env.VITE_API_URL
```

---

# 📜 Available Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| npm run dev     | Start development server  |
| npm run build   | Build production files    |
| npm run preview | Preview production build  |
| npm run lint    | Run ESLint                |
| npm run format  | Format code with Prettier |

---

# 🧩 Example Usage

Create new pages inside:

```
src/pages
```

Add routes in:

```
src/routes/router.jsx
```

Use reusable components from:

```
src/components/ui
```

---

# 🔧 Optional Enhancements

You can extend this boilerplate with:

* TanStack Query
* Zustand / Context API
* Authentication system
* Dark mode
* Toast notifications
* Form validation (React Hook Form)

---

# 🛠 Best Workflow

1. Create this boilerplate once
2. Push it to GitHub
3. Mark the repository as a **Template Repository**
4. Use it to start new projects quickly

---

# 📄 License

MIT License

---

⭐ If you find this boilerplate helpful, consider giving the repository a **star**.
