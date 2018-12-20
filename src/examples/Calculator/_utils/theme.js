const themes = {
  dark: {
    calculator: {
      container: '#000000',
      text: '#ffffff',
      border: '#ffffff',
      backgroundColors: [
        '#8e8e8e',
        '#ffa739',
        '#e8e8e8'
      ],
      colors: [
        '#ffffff',
        '#ffffff',
        '#000000',
      ]
    },
  },
  light: {
    calculator: {
      container: '#ffffff',
      text: '#000000',
      border: '#000000',
      backgroundColors: [
        '#e8e8e8',
        '#ffa739',
        '#8e8e8e',
      ],
      colors: [
        '#000000',
        '#000000',
        '#ffffff',
      ]
    },
  },
  bluesky: {
    calculator: {
      container: '#346BC8',
      text: '#ffffff',
      border: '#1B72A7',
      backgroundColors: [
        '#6499CB',
        '#263091',
        '#34BFF8',
      ],
      colors: [
        '#ffffff',
        '#ffffff',
        '#ffffff',
      ]
    },
  },
  jamntoast: {
    calculator: {
      container: '#350F2E',
      text: '#ffffff',
      border: '#5A0D4C',
      backgroundColors: [
        '#ECDFC6',
        '#D2B886',
        '#4C3219',
      ],
      colors: [
        '#000000',
        '#ffffff',
        '#ffffff',
      ]
    },
  },
};

let current = 'light';

export const setTheme = (theme) => {
  if (themes[theme]) {
    current = theme;
  }
};

export default () => themes[current];
