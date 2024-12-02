/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#3f4860',
        secondary: '#dd690d',
        gray1: '#44444d',
        // borderColor: '#9ED0CB',
        borderColor: '#dd690d',
        buttonGradientFrom: '#3f4860',
        buttonGradientTo: '#b30000',
        gradientFrom: '#3f4860',
        gradientTo: '#1f2838',
      },
      fontFamily: {
        ' gt-planar': ['GT-Planar', 'Lexend', 'Roboto'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // Tailwind default example
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        'custom-xl': [
          '1.75rem',
          { lineHeight: '2rem', letterSpacing: '-0.01em' },
        ], // Custom size
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.primaryButton': {
          alignSelf: 'flex-start',
          // display: 'inline-block',
          display: 'flex',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '1px',
          lineHeight: '20px ',
          borderWidth: '1px',
          borderColor: '#6b7280',
          color: '#e5e7eb',
          borderRadius: '6px',
        },

        '.primaryButton:hover': {
          backgroundColor: '#374151',
        },

        '.customText': {
          fontSize: '14px',
          letterSpacing: '1px',
          overflowWrap: 'break-word',
          whiteSpace: 'normal',
          color: '#fff,',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
