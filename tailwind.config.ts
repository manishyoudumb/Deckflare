import type { Config } from "tailwindcss";

export default {
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
      spacing: {
        '120': '30rem', // This would allow you to use right-120, which equals 120 * 4 = 480px
      },
      fontFamily: {
        'InstrumentSheriff' : ['InstrumentSherif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
