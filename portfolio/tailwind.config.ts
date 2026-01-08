import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        spacing: {
            'cursor': '10px',
            'cursor-outline': '12px',
        },
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
            fadeIn: {
                '0%': { opacity: "0" },
                '100%': { opacity: "1" },
            },
            softPulse: {
                '0%, 100%': { opacity: "1", transform: "translateY(0) scale(1)" },
                '50%': { opacity: "0.92", transform: "translateY(-2px) scale(1.02)" },
            },
            float: {
                '0%, 100%': { transform: "translateY(0)" },
                '50%': { transform: "translateY(-8px)" },
            },
            lineGrow: {
                '0%': { transform: "scaleX(0)", opacity: "0" },
                '100%': { transform: "scaleX(1)", opacity: "1" },
            },
            gradientMove: {
                '0%, 100%': { backgroundPosition: "0% 50%" },
                '50%': { backgroundPosition: "100% 50%" },
            },
        },
      animation: {
        flipx : 'flipx 2s 0.25s 1',
        fadeIn: 'fadeIn 1s ease-in forwards',
        softPulse: 'softPulse 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        lineGrow: 'lineGrow 0.6s ease-out forwards',
        gradientMove: 'gradientMove 15s ease infinite',
      }
    },
    fontFamily: {
		LilitaOne: ["Lilita One, cursive"],
        Rowdies: ['"Rowdies"', 'cursive'],
        BlackHanSans: ["Black Han Sans, cursive"],
	},
  },
  variants: {
    extend: {
      borderColor: ['hover'],
    },
  },
  plugins: [],
};
export default config;
