import React, { useEffect, useState } from 'react';
import { 
  Typography, 
  Grid, 
  Paper, 
  Divider, 
  Box,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Avatar,
  Fade,
  Slide
} from '@mui/material';
import {
  Lightbulb,
  Star,
  Security,
  People
} from '@mui/icons-material';
import PageLayout from '../components/common/PageLayout';
import api from '../services/api';

const AboutPage = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await api.getCompanyInfo();
        setCompanyInfo(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching company info:', err);
        setError('Failed to load company information. Please try again later.');
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  const values = [
    {
      icon: <Lightbulb />,
      title: 'Innovation',
      description: 'We constantly seek new and better ways to enhance the learning experience.',
      color: '#087CFA'
    },
    {
      icon: <Star />,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
      color: '#F4AF3D'
    },
    {
      icon: <Security />,
      title: 'Integrity',
      description: 'We act with honesty, transparency, and ethical responsibility.',
      color: '#059862'
    },
    {
      icon: <People />,
      title: 'Empowerment',
      description: 'We believe in enabling individuals to reach their full potential.',
      color: '#FF6B35'
    }
  ];

  if (loading) {
    return (
      <PageLayout
        title="About Us"
        subtitle="Learn more about our mission and values"
        breadcrumbs={['About Us']}
        showHero={false}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '40vh',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <CircularProgress size={60} thickness={4} />
          <Typography variant="h6" color="text.secondary">
            Loading our story...
          </Typography>
        </Box>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout
        title="About Us"
        subtitle="Learn more about our mission and values"
        breadcrumbs={['About Us']}
        showHero={false}
      >
        <Alert 
          severity="error" 
          sx={{ 
            borderRadius: 2,
            border: '1px solid #E53E3E',
            backgroundColor: 'rgba(229, 62, 62, 0.04)'
          }}
        >
          <Typography variant="h6" gutterBottom>
            Oops! Something went wrong
          </Typography>
          <Typography>{error}</Typography>
        </Alert>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`About ${companyInfo?.name || 'Aadhya Eduverse'}`}
      subtitle="Transforming education through innovation and excellence"
      breadcrumbs={['About Us']}
      heroBackground="gradient"
    >
      {/* Our Story Section */}
      <Grid container spacing={6} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Fade in timeout={800}>
            <Box>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Our Story
              </Typography>
              <Typography paragraph sx={{ lineHeight: 1.7, mb: 3 }}>
                {companyInfo?.about || 
                  'Aadhya Eduverse was founded with a vision to bridge the gap between education and industry by providing cutting-edge technology solutions and comprehensive training programs. We believe that quality education should be accessible to everyone, and our mission is to empower students and professionals with the knowledge and skills they need to succeed in today\'s rapidly evolving digital landscape.'}
              </Typography>
              <Typography paragraph sx={{ lineHeight: 1.7 }}>
                Our team consists of experienced educators, industry professionals, and technology experts who are passionate about creating innovative learning solutions that make a real difference in people's lives.
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <Slide in timeout={1000} direction="left">
            <Paper 
              elevation={2} 
              sx={{ 
                p: 2, 
                height: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: '#F7F8FA'
              }}
            >
              <Box
                component="img"
                src="/images/about-image.jpg"
                alt="About Aadhya Eduverse"
                sx={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: 1,
                  backgroundColor: '#DFE1E5'
                }}
              />
            </Paper>
          </Slide>
        </Grid>
      </Grid>

      {/* Mission & Vision Section */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Fade in timeout={1200}>
              <Card 
                sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  height: '100%',
                  background: 'linear-gradient(135deg, #087CFA 0%, #0052CC 100%)',
                  color: '#FFFFFF'
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  To empower individuals through innovative educational technology and high-quality training programs, enabling them to achieve their full potential in the digital age.
                </Typography>
              </Card>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in timeout={1400}>
              <Card 
                sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  height: '100%',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #E55100 100%)',
                  color: '#FFFFFF'
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  To be a global leader in educational technology, recognized for our commitment to excellence, innovation, and the success of our learners.
                </Typography>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Box>

      {/* Values Section */}
      <Box>
        <Fade in timeout={1600}>
          <Typography variant="h4" sx={{ mb: 6, textAlign: 'center', fontWeight: 600 }}>
            Our Values
          </Typography>
        </Fade>
        
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Slide in timeout={1800 + index * 200} direction="up">
                <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    textAlign: 'center',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: value.color,
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                      boxShadow: `0 4px 16px ${value.color}40`
                    }}
                  >
                    <Box sx={{ fontSize: 32 }}>
                      {value.icon}
                    </Box>
                  </Avatar>
                  
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default AboutPage;