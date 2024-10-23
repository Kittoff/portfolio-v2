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

        step_h__2: "clamp(1.8rem, 1.0904rem + 3.5478vw, 3.84rem)",
        step_h__1: "clamp(2.25rem, 1.363rem + 4.4348vw, 4.8rem)",
        step_h_0: "clamp(2.8125rem, 1.7038rem + 5.5435vw, 6rem)",
        step_h_1: "clamp(3.5156rem, 2.1298rem + 6.9293vw, 7.5rem)",
        step_h_2: "clamp(4.3945rem, 2.6622rem + 8.6617vw, 9.375rem)",
        step_h_3: "clamp(5.4932rem, 3.3277rem + 10.8271vw, 11.7188rem)",
        step_h_4: "clamp(6.8665rem, 4.1597rem + 13.5339vw, 14.6484rem)",
        step_h_5: "clamp(8.5831rem, 5.1996rem + 16.9174vw, 18.3105rem)",
        /* @link https://utopia.fyi/type/calculator?c=320,12,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

        step_p__2: "clamp(0.5208rem, 0.4237rem + 0.4855vw, 0.8rem)",
        step_p__1: "clamp(0.625rem, 0.4946rem + 0.6522vw, 1rem)",
        step_p_0: "clamp(0.75rem, 0.5761rem + 0.8696vw, 1.25rem)",
        step_p_1: "clamp(0.9rem, 0.6696rem + 1.1522vw, 1.5625rem)",
        step_p_2: "clamp(1.08rem, 0.7763rem + 1.5185vw, 1.9531rem)",
        step_p_3: "clamp(1.296rem, 0.8976rem + 1.992vw, 2.4414rem)",
        step_p_4: "clamp(1.5552rem, 1.0347rem + 2.6027vw, 3.0518rem)",
        step_p_5: "clamp(1.8662rem, 1.1885rem + 3.3886vw, 3.8147rem)",
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
