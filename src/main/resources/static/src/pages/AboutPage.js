import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Breadcrumbs, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
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

  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Typography color="text.primary">About Us</Typography>
        </Breadcrumbs>

        <Typography variant="h3" component="h1" gutterBottom>
          About {companyInfo?.name || 'Aadhya Eduverse'}
        </Typography>

        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              {companyInfo?.about || 
                'Aadhya Eduverse was founded with a vision to bridge the gap between education and industry by providing cutting-edge technology solutions and comprehensive training programs. We believe that quality education should be accessible to everyone, and our mission is to empower students and professionals with the knowledge and skills they need to succeed in today\'s rapidly evolving digital landscape.'}
            </Typography>
            <Typography paragraph>
              Our team consists of experienced educators, industry professionals, and technology experts who are passionate about creating innovative learning solutions that make a real difference in people's lives.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Box
                component="img"
                src="/images/about-image.jpg"
                alt="About Aadhya Eduverse"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1
                }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
            To empower individuals through innovative educational technology and high-quality training programs, enabling them to achieve their full potential in the digital age.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
            To be a global leader in educational technology, recognized for our commitment to excellence, innovation, and the success of our learners.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box>
          <Typography variant="h4" gutterBottom align="center">
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Innovation
                </Typography>
                <Typography variant="body2">
                  We constantly seek new and better ways to enhance the learning experience.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Excellence
                </Typography>
                <Typography variant="body2">
                  We strive for the highest standards in everything we do.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Integrity
                </Typography>
                <Typography variant="body2">
                  We act with honesty, transparency, and ethical responsibility.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Empowerment
                </Typography>
                <Typography variant="body2">
                  We believe in enabling individuals to reach their full potential.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;