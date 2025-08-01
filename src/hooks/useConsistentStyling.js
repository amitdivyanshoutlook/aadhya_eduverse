import { useTheme, alpha } from '@mui/material';

/**
 * Custom hook that provides consistent styling patterns across the application
 * Ensures header, footer, and all components use the same design language
 */
export const useConsistentStyling = () => {
  const theme = useTheme();

  return {
    // Header specific styles
    header: {
      appBar: {
        bgcolor: alpha(theme.palette.background.paper, 0.95),
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
      },
      navigation: {
        active: {
          bgcolor: theme.palette.primary.main,
          color: '#FFFFFF',
          fontWeight: 600
        },
        inactive: {
          color: theme.palette.text.primary,
          fontWeight: 500
        },
        hover: {
          transform: 'translateY(-1px)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }
      }
    },

    // Footer specific styles
    footer: {
      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
      borderTop: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
      text: {
        primary: '#FFFFFF',
        secondary: alpha('#FFFFFF', 0.95),
        muted: alpha('#FFFFFF', 0.85)
      },
      interactive: {
        background: alpha('#FFFFFF', 0.25),
        backgroundHover: alpha('#FFFFFF', 0.35),
        textOpacity: 0.95,
        textOpacityHover: 1
      }
    },

    // Common interactive elements
    interactive: {
      button: {
        primary: {
          bgcolor: theme.palette.primary.main,
          color: '#FFFFFF',
          '&:hover': {
            bgcolor: theme.palette.primary.dark,
            transform: 'translateY(-1px)',
            boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`
          }
        },
        secondary: {
          bgcolor: 'transparent',
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          '&:hover': {
            bgcolor: alpha(theme.palette.primary.main, 0.04),
            borderColor: theme.palette.primary.main
          }
        }
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 500,
        '&:hover': {
          textDecoration: 'underline',
          textDecorationColor: alpha(theme.palette.primary.main, 0.8)
        }
      }
    },

    // Brand consistency
    brand: {
      logo: {
        size: { mobile: 40, desktop: 48 },
        shadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.3)}`
      },
      typography: {
        primary: {
          fontWeight: 800,
          color: theme.palette.primary.main,
          fontSize: { xs: '1.2rem', md: '1.5rem' }
        },
        secondary: {
          fontWeight: 500,
          color: theme.palette.text.secondary,
          fontSize: '0.75rem'
        }
      }
    },

    // Transitions and animations
    transitions: {
      default: 'all 0.2s ease',
      slow: 'all 0.3s ease',
      fast: 'all 0.15s ease'
    },

    // Spacing consistency
    spacing: {
      section: { xs: 4, md: 6 },
      component: { xs: 2, md: 3 },
      element: 1
    }
  };
};

export default useConsistentStyling;