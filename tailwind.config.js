module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif','serif'],
        Consolas:'Consolas',
        Liberation: "Liberation Mono"
      },
      extend: {
        colors:{
          'regal-blue': '#243c5a',
          'rose':{
            '300' : '#fda4af',
            '500': '#f43f5e',
            '700': '#be123c',
            '900' : '#881337'
          }

        },
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'sidebar-dark-bg':'#e11d48',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          'rose':{
            '300' : '#fda4af',
            '500': '#f43f5e',
            '700': '#be123c',
            '900' : '#881337'
          }
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
            // "url('https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702684800&semt=ais')"
        },
      },
    },
    plugins: [],
  };