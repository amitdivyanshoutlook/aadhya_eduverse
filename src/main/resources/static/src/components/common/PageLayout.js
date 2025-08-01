import React from 'react';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Fade,
  useTheme,
  alpha
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PageLayout = ({ 
  title, 
  subtitle, 
  breadcrumbs = [], 
  children, 
  maxWidth = 'xl',
  showHero = true,
  heroBackground = 'default'
}) => {
  const theme = useTheme();

  const getHeroBackground = () => {
    switch (heroBackground) {
      case 'gradient':
        return 'linear-gradient(135deg, #087CFA 0%, #0052CC 100%)';
      case 'light':
        return 'linear-gradient(180deg, #F7F8FA 0%, #FFFFFF 100%)';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      {showHero && (
        <Box
          sx={{
            background: getHeroBackground(),
            color: heroBackground === 'gradient' ? '#FFFFFF' : '#000000',
            py: { xs: 6, md: 8 },
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern for gradient hero */}
          {heroBackground === 'gradient' && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `,
                pointerEvents: 'none'
              }}
            />
          )}

          <Container maxWidth={maxWidth} sx={{ position: 'relative' }}>
            <Fade in timeout={800}>
              <Box>
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                  <Breadcrumbs 
                    sx={{ 
                      mb: 4,
                      '& .MuiBreadcrumbs-separator': {
                        color: heroBackground === 'gradient' ? 'rgba(255,255,255,0.7)' : '#6C707E'
                      }
                    }}
                  >
                    <Link 
                      component={RouterLink} 
                      to="/" 
                      underline="hover" 
                      sx={{ 
                        color: heroBackground === 'gradient' ? 'rgba(255,255,255,0.9)' : '#6C707E',
                        '&:hover': {
                          color: heroBackground === 'gradient' ? '#FFFFFF' : '#087CFA'
                        }
                      }}
                    >
                      Home
                    </Link>
                    {breadcrumbs.map((crumb, index) => (
                      <Typography 
                        key={index}
                        sx={{ 
                          color: heroBackground === 'gradient' ? '#FFFFFF' : '#000000',
                          fontWeight: 500
                        }}
                      >
                        {crumb}
                      </Typography>
                    ))}
                  </Breadcrumbs>
                )}

                {/* Title */}
                <Typography
                  variant="h1"
                  sx={{
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    textShadow: heroBackground === 'gradient' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  {title}
                </Typography>

                {/* Subtitle */}
                {subtitle && (
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: '800px',
                      lineHeight: 1.6,
                      opacity: heroBackground === 'gradient' ? 0.9 : 0.8,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    {subtitle}
                  </Typography>
                )}
              </Box>
            </Fade>
          </Container>
        </Box>
      )}

      {/* Content Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          backgroundColor: '#F7F8FA',
          minHeight: showHero ? 'auto' : '60vh'
        }}
      >
        <Container maxWidth={maxWidth}>
          <Fade in timeout={1000}>
            <Box>
              {/* Breadcrumbs for non-hero pages */}
              {!showHero && breadcrumbs.length > 0 && (
                <Breadcrumbs sx={{ mb: 4 }}>
                  <Link 
                    component={RouterLink} 
                    to="/" 
                    underline="hover" 
                    sx={{ 
                      color: '#6C707E',
                      '&:hover': { color: '#087CFA' }
                    }}
                  >
                    Home
                  </Link>
                  {breadcrumbs.map((crumb, index) => (
                    <Typography key={index} sx={{ color: '#000000', fontWeight: 500 }}>
                      {crumb}
                    </Typography>
                  ))}
                </Breadcrumbs>
              )}

              {/* Non-hero title */}
              {!showHero && title && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {title}
                  </Typography>
                  {subtitle && (
                    <Typography variant="h6" color="text.secondary">
                      {subtitle}
                    </Typography>
                  )}
                </Box>
              )}

              {children}
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default PageLayout;