// tailwind.config.ts
    import type { Config } from 'tailwindcss';

    const config: Config = {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          fontFamily: {
            gotham: ['Gotham','sans-serif'],
            alan: ['AlanSans','sans-serif'],
            louis: ['Louis','sans-serif'],
            ethereal: ['Ethereal', 'serif']
          },
        }
      },
      plugins: [],
    };

    export default config;
    