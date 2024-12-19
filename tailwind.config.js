/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Aktifkan dark mode
  content: [
    "./index.html", // File HTML di root proyek
    "./src/**/*.{html,js}", // Semua file HTML dan JS di dalam folder src
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
