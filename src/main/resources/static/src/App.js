import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// JetBrains-inspired professional theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#087CFA', // JetBrains blue
      light: '#4A9EFF',
      dark: '#0052CC',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B35', // JetBrains orange accent
      light: '#FF8A5B',
      dark: '#E55100',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F7F8FA', // JetBrains light background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000', // JetBrains primary text
      secondary: '#6C707E', // JetBrains secondary text
    },
    success: {
      main: '#059862', // JetBrains green
      light: '#4CAF50',
      dark: '#2E7D32',
    },
    warning: {
      main: '#F4AF3D', // JetBrains yellow
      light: '#FFB74D',
      dark: '#F57C00',
    },
    error: {
      main: '#E53E3E', // JetBrains red
      light: '#EF5350',
      dark: '#C62828',
    },
    info: {
      main: '#087CFA',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    // Custom JetBrains colors
    grey: {
      50: '#F7F8FA',
      100: '#F0F2F5',
      200: '#DFE1E5',
      300: '#C1C7D0',
      400: '#9FADBC',
      500: '#6C707E',
      600: '#5E6C84',
      700: '#505F79',
      800: '#42526E',
      900: '#253858',
    },
  },
  typography: {
    fontFamily: '"Inter", "JetBrains Mono", "SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      color: '#000000',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#000000',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#000000',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      color: '#000000',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#000000',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: '#000000',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#000000',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#6C707E',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      color: '#6C707E',
    },
  },
  shape: {
    borderRadius: 8, // JetBrains uses more subtle border radius
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.04)', // JetBrains subtle shadows
    '0px 2px 4px rgba(0, 0, 0, 0.06)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 6px 12px rgba(0, 0, 0, 0.1)',
    '0px 8px 16px rgba(0, 0, 0, 0.12)',
    '0px 12px 24px rgba(0, 0, 0, 0.14)',
    '0px 16px 32px rgba(0, 0, 0, 0.16)',
    '0px 24px 48px rgba(0, 0, 0, 0.18)',
    ...Array(15).fill('0px 24px 48px rgba(0, 0, 0, 0.18)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a8a8a8',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          padding: '8px 16px',
          boxShadow: 'none',
          transition: 'all 0.15s ease-in-out',
          minHeight: '36px',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
          },
        },
        contained: {
          backgroundColor: '#087CFA',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#0052CC',
            boxShadow: '0 4px 12px rgba(8, 124, 250, 0.3)',
          },
        },
        outlined: {
          borderColor: '#DFE1E5',
          color: '#000000',
          '&:hover': {
            borderColor: '#087CFA',
            backgroundColor: 'rgba(8, 124, 250, 0.04)',
          },
        },
        text: {
          color: '#087CFA',
          '&:hover': {
            backgroundColor: 'rgba(8, 124, 250, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
          border: '1px solid #DFE1E5',
          transition: 'all 0.2s ease-in-out',
          backgroundColor: '#FFFFFF',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            borderColor: '#C1C7D0',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          fontSize: '0.875rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976d2',
              },
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '2px',
              },
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
        },
        elevation1: {
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
          border: '1px solid #DFE1E5',
        },
        elevation2: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid #DFE1E5',
        },
        elevation3: {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
          border: '1px solid #C1C7D0',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: '0 16px 16px 0',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Header />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;