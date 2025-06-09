/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // small mobile (ini opsional, tapi bisa bantu deteksi layar kecil banget)
        sm: "480px", // mobile landscape / small tablet
        md: "768px", // tablet portrait (umum)
        lg: "1024px", // tablet landscape / small laptop
        xl: "1280px", // desktop
        "2xl": "1440px",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Playfair Display SC", "serif"],
      },
      fontSize: {
        display1: ["54px", { lineHeight: "140%" }],
        display2: ["48px", { lineHeight: "140%" }],
        display3: ["32px", { lineHeight: "140%" }],
        display4: ["28px", { lineHeight: "140%" }],
        heading1: ["24px", { lineHeight: "140%" }],
        heading2: ["20px", { lineHeight: "140%" }],
        heading3: ["18px", { lineHeight: "120%" }],
        heading4: ["16px", { lineHeight: "120%" }],
        body1: ["14px", { lineHeight: "150%" }],
        body2: ["12px", { lineHeight: "150%" }],
      },
      fontWeight: {
        thin: 100,
        regular: 400,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        primary: "#101630",
        secondary: "#1A213B",
        "s1": "#4ea0d7",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(-135deg, #56927E 0%, #002544 50%, #016484 100%)",
      },
    },
  },
  plugins: [],
};
