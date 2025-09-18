/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'border': "var(--color-border)",
        'background': "var(--color-background)",
        'foreground': "var(--color-foreground)",
        'primary': {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        'card': "var(--color-card)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-delay-1': 'fade-in 0.7s ease-out 0.2s forwards',
        'fade-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
        'fade-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
        'fade-delay-4': 'fade-in 0.7s ease-out 0.8s forwards',
        'meteor': 'meteor 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'fade-in': {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        meteor: {
          '0%': { 
            transform: 'rotate(215deg) translateY(0)',
            opacity: '1',
          },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-1000px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
