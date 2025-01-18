/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", 
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
    },
    extend: {
      colors: {
        black: {
          600: "#666666",
          900: "#000000",
          "900_01": "#0d0d0d",
          "900_02": "#1a1a1a",
          "900_05": "#00000005",
          "900_33": "#00000033",
          "900_3f": "#0000003f",
        },
        blue: { a400: "#2962ff" },
        blue_gray: {
          100: "#d9d9d9",
          900: "#333333",
          "100_01": "#d1d5db",
          "100_02": "#cfcfcf",
          "900_01": "#262626",
        },
        deep_orange: { 500: "#ff5722", "500_16": "#ff572216" },
        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          "300_01": "#e6e6e6",
          "500_01": "#999999",
          "500_02": "var(--gray_500_02)",
          "500_03": "var(--gray_500_03)",
          "500_04": "var(--gray_500_04)",
          "600_01": "var(--gray_600_01)",
          "700_01": "var(--gray_700_01)",
          "700_02": "var(--gray_700_02)",
          "700_03": "var(--gray_700_03)",
          "800_01": "var(--gray_800_01)",
        },
        green: { 100: "var(--green_100)", 800: "var(--green_800)", 900: "var(--green_900)" },
        red: { 500: "var(--red_500)", a700: "var(--red_a700)" },
        white: { a700: "#ffffff" },
        gray_shadow: "var(--gray_shadow)",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        sm: "0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
        md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
