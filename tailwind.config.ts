import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //main colors&lightmode
        background_main: "#87CEEB",
        background_sub: " #FFFFFF",
        background_chat: "#E0F5FF",
        background_time: "#FAFABE",
        background_button: "#FFEF5C",
        highlight: "#FFD700",
        Text_Primary: "#2F4F4F",
        Text_Secondary: "#708090",
        active_color: "#00FF00",
        success_color: "#32CD32",
        Error: "#DC143C",
        // sub color for dark mode 
        
        background_main_dark: "#222831", // Deep navy gray (calming and modern)
        background_sub_dark: "#31363F", // Soft dark gray (subtle contrast)
        background_chat_dark: "#3A4750", // Medium gray-blue (pleasant for the eyes)
        background_time_dark: "#4E5861", // Muted gray-blue (visible but not too bright)
        background_button_dark: "#CC9900",
        highlight_dark: "#F8C471", // Warm gold (gentler than bright yellow)
        Text_Primary_dark: "#EEEEEE", // Off-white (comfortable for long reading)
        Text_Secondary_dark: "#A4A4A4", // Softer gray (for subtle contrast)
        active_color_dark: "#00E676", // Soft green (vibrant but not harsh)
        success_color_dark: "#57CC99", // Muted teal-green (relaxing yet positive)
        Error_dark: "#FF6B6B", // Warm red (not too aggressive)
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
      fontSize: {
        'xxs': '0.65rem',
      }
    },
  },
  plugins: [],
} satisfies Config;



