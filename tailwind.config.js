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
      fontSize: {
        /* @link https://utopia.fyi/type/calculator?c=320,45,1.25,1240,96,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

        step__2: "clamp(1.8rem, 1.0904rem + 3.5478vw, 3.84rem)",
        step__1: "clamp(2.25rem, 1.363rem + 4.4348vw, 4.8rem)",
        step_0: "clamp(2.8125rem, 1.7038rem + 5.5435vw, 6rem)",
        step_1: "clamp(3.5156rem, 2.1298rem + 6.9293vw, 7.5rem)",
        step_2: "clamp(4.3945rem, 2.6622rem + 8.6617vw, 9.375rem)",
        step_3: "clamp(5.4932rem, 3.3277rem + 10.8271vw, 11.7188rem)",
        step_4: "clamp(6.8665rem, 4.1597rem + 13.5339vw, 14.6484rem)",
        step_5: "clamp(8.5831rem, 5.1996rem + 16.9174vw, 18.3105rem)",
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
