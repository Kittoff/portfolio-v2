/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        melodrama: ["var(--font-melodrama)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGrey: "#686868",
        customBlue: "#223C52",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        customRadius:
          "rounded-tl-[10px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[10px]",
      },
    },
  },
  plugins: [],
};
