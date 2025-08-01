import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Chip,
  Avatar,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Fade,
  Slide
} from '@mui/material';
import {
  PlayArrow,
  TrendingUp,
  School,
  Psychology,
  Code,
  Star,
  People,
  EmojiEvents,
  Rocket
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Hero = ({ companyInfo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const stats = [
    { icon: <People />, value: '1000+', label: 'Students Trained' },
    { icon: <EmojiEvents />, value: '50+', label: 'Courses Completed' },
    { icon: <Star />, value: '4.9', label: 'Average Rating' },
    { icon: <TrendingUp />, value: '95%', label: 'Success Rate' }
  ];

  const features = [
    { icon: <Psychology />, title: 'AI-Powered Learning', color: '#FF6B6B' },
    { icon: <Code />, title: 'Hands-on Projects', color: '#4ECDC4' },
    { icon: <School />, title: 'Expert Instructors', color: '#45B7D1' },
    { icon: <Rocket />, title: 'Career Support', color: '#96CEB4' }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '100vh' },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }}
      />

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: { xs: 60, md: 100 },
            height: { xs: 60, md: 100 },
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            display: { xs: 'none', md: 'block' }
          }}
        />
      ))}

      <Container maxWidth="xl" sx={{ position: 'relative', py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Fade in={visible} timeout={1000}>
              <Box>
                <Chip
                  label="🚀 Welcome to the Future of Education"
                  sx={{
                    mb: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                />
                
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 900,
                    color: 'white',
                    mb: 2,
                    lineHeight: 1.1,
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {companyInfo?.name || 'Aadhya Eduverse'}
                </Typography>
                
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.8rem' },
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 3,
                    lineHeight: 1.3
                  }}
                >
                  {companyInfo?.tagline || 'Empowering Education Through Technology'}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    lineHeight: 1.6,
                    maxWidth: '600px'
                  }}
                >
                  Transform your career with our cutting-edge AI-powered learning platform. 
                  Join thousands of students who have successfully mastered in-demand skills 
                  through our comprehensive training programs and expert guidance.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/products"
                    startIcon={<Rocket />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 40px rgba(255, 255, 255, 0.4)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Explore Products
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/services"
                    startIcon={<PlayArrow />}
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>

                {/* Stats */}
                <Grid container spacing={3}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <Slide in={visible} direction="up" timeout={1000 + index * 200}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Avatar
                            sx={{
                              bgcolor: 'rgba(255, 255, 255, 0.2)',
                              mb: 1,
                              mx: 'auto',
                              width: 48,
                              height: 48
                            }}
                          >
                            {stat.icon}
                          </Avatar>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 800,
                              color: 'white',
                              fontSize: { xs: '1.5rem', md: '2rem' }
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.9rem'
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Slide>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Fade in={visible} timeout={1500}>
              <Box sx={{ position: 'relative' }}>
                {/* Feature Cards */}
                <Grid container spacing={3}>
                  {features.map((feature, index) => (
                    <Grid item xs={6} key={index}>
                      <Slide in={visible} direction="left" timeout={1500 + index * 200}>
                        <Card
                          sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: 4,
                            p: 2,
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-8px)',
                              bgcolor: 'rgba(255, 255, 255, 0.15)',
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                            }
                          }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: feature.color,
                              mb: 2,
                              mx: 'auto',
                              width: 56,
                              height: 56,
                              boxShadow: `0 8px 32px ${feature.color}40`
                            }}
                          >
                            {feature.icon}
                          </Avatar>
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '1rem'
                            }}
                          >
                            {feature.title}
                          </Typography>
                        </Card>
                      </Slide>
                    </Grid>
                  ))}
                </Grid>

                {/* Central Glow Effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    height: 300,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: -1,
                    animation: 'pulse 4s ease-in-out infinite'
                  }}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </Box>
  );
};

export default Hero;