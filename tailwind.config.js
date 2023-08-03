/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blink: {
          "0%": { opacity: 0 },
          "49%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "text-underline": "underline 1.5s ease-out forwards",
        "text-appear": "appear 1s ease-in-out forwards",
        "animation-opacity": "opacity 0.3s ease-out forwards",
        blinking: "blink 2s linear infinite",
      },
    },
  },
  plugins: [],
};
