'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import theme from '@/theme/theme';

// Create a cache for the styles
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export function ThemeProvider({ children }) {
  const [cache] = useState(createEmotionCache);

  // Insert the styles in the <head> of the document
  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  // Create a MUI theme instance
  const muiTheme = createTheme({
    ...theme,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: theme.shape.borderRadius,
            padding: '0.75rem 1.5rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: theme.shadows[2],
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              color: theme.colors.primary.main,
            },
          },
        },
      },
    },
  });

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
}
