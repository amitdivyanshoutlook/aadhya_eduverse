import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  CircularProgress,
  Alert,
  useTheme,
  alpha,
  Fade,
  Slide
} from '@mui/material';
import {
  TrendingUp,
  People,
  EmojiEvents,
  Star,
  Lightbulb,
  Speed,
  Security,
  Support
} from '@mui/icons-material';
import Hero from '../components/home/Hero';
import ProductsSection from '../components/home/ProductsSection';
import ServicesSection from '../components/home/ServicesSection';
import api from '../services/api';

const HomePage = () => {
  const [homeData, setHomeData] = useState({
    companyInfo: null,
    products: [],
    servicesByCategory: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await api.getHomeData();
        setHomeData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching home data:', err);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  const features = [
    {
      icon: <Lightbulb />,
      title: 'Innovation First',
      description: 'Cutting-edge AI-powered learning solutions that adapt to your pace',
      color: '#FF6B6B'
    },
    {
      icon: <Speed />,
      title: 'Fast Track Learning',
      description: 'Accelerated programs designed for quick skill acquisition',
      color: '#4ECDC4'
    },
    {
      icon: <Security />,
      title: 'Industry Certified',
      description: 'Recognized certifications that boost your career prospects',
      color: '#45B7D1'
    },
    {
      icon: <Support />,
      title: '24/7 Support',
      description: 'Round-the-clock mentorship and technical assistance',
      color: '#96CEB4'
    }
  ];

  const achievements = [
    { icon: <People />, value: '5000+', label: 'Students Trained', color: '#667eea' },
    { icon: <EmojiEvents />, value: '100+', label: 'Courses Delivered', color: '#f093fb' },
    { icon: <Star />, value: '4.9/5', label: 'Average Rating', color: '#4facfe' },
    { icon: <TrendingUp />, value: '98%', label: 'Success Rate', color: '#43e97b' }
  ];

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <CircularProgress size={60} thickness={4} />
        <Typography variant="h6" color="text.secondary">
          Loading amazing content...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Oops! Something went wrong
          </Typography>
          <Typography>{error}</Typography>
        </Alert>
      </Container>
    );
  }

  return (
    <Box>
      <Hero companyInfo={homeData.companyInfo} />
      
      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
          position: 'relative'
        }}
      >
        <Container maxWidth="xl">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="✨ Why Choose Us"
                sx={{
                  mb: 3,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: 'primary.main',
                  fontWeight: 700,
                  fontSize: '1rem',
                  px: 3,
                  py: 1
                }}
              />
              
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Excellence in Every Aspect
              </Typography>
              
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
              >
                We combine cutting-edge technology with proven teaching methodologies 
                to deliver exceptional learning experiences.
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Slide in timeout={1000 + index * 200} direction="up">
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      border: 'none',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: feature.color,
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 3,
                        boxShadow: `0 8px 32px ${feature.color}40`
                      }}
                    >
                      <Box sx={{ fontSize: 40 }}>
                        {feature.icon}
                      </Box>
                    </Avatar>
                    
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                      {feature.title}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <ProductsSection products={homeData.products} />
      
      <ServicesSection servicesByCategory={homeData.servicesByCategory} />
      
      {/* Achievements Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Pattern */}
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

        <Container maxWidth="xl" sx={{ position: 'relative' }}>
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                Our Impact in Numbers
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  maxWidth: '600px',
                  mx: 'auto',
                  opacity: 0.9,
                  lineHeight: 1.6
                }}
              >
                Join thousands of successful learners who have transformed their careers with us.
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Slide in timeout={1200 + index * 200} direction="up">
                  <Card
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      textAlign: 'center',
                      p: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        bgcolor: 'rgba(255, 255, 255, 0.15)'
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: achievement.color,
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 3,
                        boxShadow: `0 8px 32px ${achievement.color}40`
                      }}
                    >
                      <Box sx={{ fontSize: 40 }}>
                        {achievement.icon}
                      </Box>
                    </Avatar>
                    
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '2.5rem' }
                      }}
                    >
                      {achievement.value}
                    </Typography>
                    
                    <Typography
                      variant="h6"
                      sx={{
                        opacity: 0.9,
                        fontWeight: 600
                      }}
                    >
                      {achievement.label}
                    </Typography>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)'
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Chip
                    label="🏢 About Us"
                    sx={{
                      mb: 3,
                      bgcolor: alpha(theme.palette.success.main, 0.1),
                      color: 'success.main',
                      fontWeight: 700,
                      fontSize: '1rem',
                      px: 3,
                      py: 1
                    }}
                  />
                  
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 4,
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Transforming Education Through Innovation
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {homeData.companyInfo?.about?.substring(0, 200) || 
                      'Aadhya Eduverse is a leading educational technology company specializing in AI-powered learning solutions and professional training services.'}
                    {homeData.companyInfo?.about?.length > 200 && '...'}
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                        <Lightbulb />
                      </Avatar>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Innovative AI-powered learning solutions
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'secondary.main', width: 40, height: 40 }}>
                        <People />
                      </Avatar>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Expert instructors with industry experience
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'success.main', width: 40, height: 40 }}>
                        <EmojiEvents />
                      </Avatar>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Recognized certifications and career support
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Slide in timeout={1200} direction="left">
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 400,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '4rem'
                    }}
                  >
                    🎓
                  </Box>
                  
                  {/* Overlay with company info */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white',
                      p: 3
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {homeData.companyInfo?.name || 'Aadhya Eduverse'}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      {homeData.companyInfo?.tagline || 'Empowering Education Through Technology'}
                    </Typography>
                  </Box>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;