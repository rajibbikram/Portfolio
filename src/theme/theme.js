const theme = {
  colors: {
    primary: {
      main: '#00f6ff',
      light: '#9b8bff',
      dark: '#0f172a',
      contrastText: '#0f172a',
    },
    secondary: {
      main: '#7c3aed',
      light: '#a855f7',
      dark: '#4c1d95',
      contrastText: '#ffffff',
    },
    tertiary: {
      main: '#f43f5e',
      light: '#fb7185',
      dark: '#be123c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#050916',
      paper: 'rgba(8,9,20,0.85)',
      dark: '#02040f',
    },
    text: {
      primary: '#e0e7ff',
      secondary: '#a5b4fc',
      disabled: '#64748b',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
    },
    error: {
      main: '#f43f5e',
      light: '#fb7185',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#334155',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    // Add more shadow variants as needed
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
};

export default theme;
