/**
 * Theme constants for consistent styling across header, footer, and all components
 */

export const HEADER_STYLES = {
  height: 80,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderColor: 'rgba(0, 0, 0, 0.08)',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
};

export const FOOTER_STYLES = {
  backgroundColor: {
    primary: '#0052CC', // theme.palette.primary.dark
    secondary: '#087CFA', // theme.palette.primary.main
    accent: '#4A9EFF', // theme.palette.primary.light
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.95)',
    muted: 'rgba(255, 255, 255, 0.85)',
  },
  interactive: {
    background: 'rgba(255, 255, 255, 0.25)',
    backgroundHover: 'rgba(255, 255, 255, 0.35)',
    textOpacity: 0.95,
    textOpacityHover: 1,
  }
};

export const NAVIGATION_STYLES = {
  activeColor: '#FFFFFF',
  inactiveColor: 'rgba(255, 255, 255, 0.95)',
  hoverTransform: 'translateX(4px)',
  transition: 'all 0.2s ease',
};

export const BRAND_STYLES = {
  logo: {
    size: { mobile: 40, desktop: 48 },
    shadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
  },
  typography: {
    primary: {
      fontWeight: 800,
      fontSize: { xs: '1.2rem', md: '1.5rem' },
    },
    secondary: {
      fontWeight: 500,
      fontSize: '0.75rem',
    }
  }
};