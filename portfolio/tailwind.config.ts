import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flipx: {
          "0%" :{
            transform: "rotateX(-180deg)"
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%" :{
            transform: "rotateX(0deg)"
          },
        },
      },
      animation: {
        flipx : 'flipx 2s 0.25s 1',
      }
    },
    fontFamily: {
		LilitaOne: ["Lilita One, cursive"],
        Rowdies: ['"Rowdies"', 'cursive'],
        BlackHanSans: ["Black Han Sans, cursive"],
	},
  },
  plugins: [],
};
export default config;
