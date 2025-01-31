import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      container: {
        center: true,
        screens: {
          DEFAULT: '640px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
