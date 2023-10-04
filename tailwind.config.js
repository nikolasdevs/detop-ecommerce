/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: { body: "Poppins" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
