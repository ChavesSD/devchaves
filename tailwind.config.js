/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#020617',
          card: 'rgba(15, 23, 42, 0.6)',
          cardBorder: 'rgba(59, 130, 246, 0.15)',
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#22D3EE',
          muted: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulse-subtle 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 25px rgba(16,185,129,0.35)' },
          '50%': { opacity: '0.95', boxShadow: '0 0 30px rgba(16,185,129,0.5)' },
        },
      },
      backdropBlur: {
        card: '12px',
      },
    },
  },
  plugins: [],
}
