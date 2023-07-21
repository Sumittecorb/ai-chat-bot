"use client";

export const theme = {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        'tablet': {'max': '991px'},
        'mobile': {'max': '780px'},
        'mobileView': {'max': '767px'},
        'xs': {'max': '640px'},
        'xxs': {'max': '575px'},
        'xss':{'max':'475px'},
        'xxxs': {'max': '425px'},
        'smalldevice': {'max': '375px'},
      },
      colors: {
        // Define your colors for dark mode
        'lightGreen':'#202708',
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'green-light':'#202708',
        dark: {
          bgcolor:"#ffffff",
          primary: "#1a202c",
          secondary: "red",
          blackText:"#000000",
          // Add more dark mode colors as needed
        },
      },
      backgroundColor: {
        light: {
          'lightBackground': '#f6f8fa',
          'sidebar_bg': '[#000000]',
          'lightborder':'[#b9bcb56b]',
          // 'redcolor':'linear-gradient(red, yellow)',
        },
        dark: {
          'darkBackground':'[#3490dc]',
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f', 
          'hero-pattern':"linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
        },
      },
      gradientColorStops: {
        'gradient-red': `['#ff0000', '#f00']`,
      },
      backgroundImage: {
        'whiterupee': "url('/images/rupes.svg')",
        'blackrupee': "url('/images/rupesblack.svg')",
        'userIcon':"url('/images/user.svg')",
        'frameline':"url('/images/Frameline.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
       },
    },

  variants: {},
  plugins: [],
};
