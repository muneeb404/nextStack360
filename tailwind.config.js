/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'mobile': '320px',
  
        'lgmobile': '500px',
  
        'tablet': '768px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
  
        'xl': '3000px',
      }
    },
  },
  plugins: [],
};
