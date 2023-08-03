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
      'tablet': { 'max': '991px' },
      'mobile': { 'max': '780px' },
      'mobileView': { 'max': '767px' },
      'xs': { 'max': '640px' },
      'xxs': { 'max': '575px' },
      'xss': { 'max': '475px' },
      'xxxs': { 'max': '425px' },
      'smalldevice': { 'max': '375px' },
    },
    colors: {
      inputbg: '#343734',
      btnBorder: '#69597d',
      borderCol: '[#ccc]',
      themeBg: '#232323',
      gradientLeft: '#202708',
      gradientRight: '#171717',
      quesColor: '#ffffff63',
      supportBoxBg: '#171817',
      lightBorder: '#b9bcb56b',
      successBg: '#292626',
      logoutBg: '#d7b7ff',
      lightBackground: '#f6f8fa',
      addCardText: '#000000c9',
    },
    backgroundImage: {
      'whiterupee': "url('/images/rupes.svg')",
      'blackrupee': "url('/images/rupesblack.svg')",
      'userIcon': "url('/images/user.svg')",
      'frameline': "url('/images/Frameline.svg')",
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },

  variants: {},
  plugins: [],
};
