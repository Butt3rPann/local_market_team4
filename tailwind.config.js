/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        concertOne: ["Concert One"],
        lilitaOne: ["'Lilita One', sans-serif"],
        anuphan: ["Anuphan"],
        pridi: ["Pridi"],
        poppins: ["Poppins"],
      },
      colors: {
        primary: {
          100: "#1F2A48",
          200: "#141C2F",
        },
        utility: "rgb(0,121,254)",
      },
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit')
  ],
};
