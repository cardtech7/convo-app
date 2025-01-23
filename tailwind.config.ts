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
        //main colors&lightmode
        background_main: "#87CEEB",
        background_sub: " #FFFFFF",
        background_chat: "#E0F5FF",
        background_time: "#FAFABE",
        highlight: "#FFD700",
        Text_Primary: "#2F4F4F",
        Text_Secondary: "#708090",
        active_color: "#00FF00",
        success_color: "#32CD32",
        Error: "#DC143C",
        /* sub color for dark mode 
        comming soon */
      },
      screens: {
        xs : '470px',
        sm : '680px',
        md : '760px',
        lg : '1020px',
        xl : '1280px',
        xxl : '1400px'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif', 'Sans'],
      },
      boxShadow: {
        'zero-offset': '0 0 5px', // 0x, 0y offset with a blur
      },
    },
  },
  plugins: [],
} satisfies Config;
