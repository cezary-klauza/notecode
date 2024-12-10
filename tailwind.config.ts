import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fffffe',
        black: '#121826',
        gray: {
          1: '#364153',
          2: '#CED6E1'
        },
        blue: '#406AFF',
        vsCode: '#1e1e1e'
      },
    },
    backgroundImage: {
      hero: 'url(/Hero-Background-notecode.svg)'
    },
    keyframes: {
      disapper: {
        '0%': {
          opacity: "1"
        },
        '100%': {
          opacity: "0"
        }
      }
    },
    animation: {
      disapper: 'disapper 2s ease-in'
    }
  },
  plugins: [],
} satisfies Config;
