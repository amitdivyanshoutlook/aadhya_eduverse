import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Paper, Button, Breadcrumbs, Link, Grid, Divider, Chip } from '@mui/material';
import api from '../services/api';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await api.getServiceById(id);
        setService(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError('Failed to load service details. Please try again later.');
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

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

  if (!service) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Service not found.</Typography>
        <Button component={RouterLink} to="/services" sx={{ mt: 2 }}>
          Back to Services
        </Button>
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
          <Link component={RouterLink} to="/services" underline="hover" color="inherit">
            Services
          </Link>
          <Typography color="text.primary">{service.name}</Typography>
        </Breadcrumbs>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
              <Box
                component="img"
                src={service.imageUrl || '/images/service-placeholder.jpg'}
                alt={service.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Chip 
              label={service.category} 
              color="primary" 
              size="small" 
              sx={{ mb: 2 }} 
            />
            <Typography variant="h3" component="h1" gutterBottom>
              {service.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              {service.shortDescription}
            </Typography>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
              {service.description}
            </Typography>
            
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{ mt: 2 }}
            >
              Enquire Now
            </Button>
          </Grid>
        </Grid>

        {service.category === 'Training' && (
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Course Curriculum
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            {/* This would be dynamic in a real application */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Module 1: Fundamentals
                  </Typography>
                  <Typography variant="body2">
                    Introduction to core concepts and basic principles.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Module 2: Advanced Techniques
                  </Typography>
                  <Typography variant="body2">
                    Deeper exploration of complex topics and practical applications.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Module 3: Projects & Case Studies
                  </Typography>
                  <Typography variant="body2">
                    Hands-on projects and real-world case studies to apply learned skills.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}

        {service.category === 'Development' && (
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Development Process
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    1. Requirements Analysis
                  </Typography>
                  <Typography variant="body2">
                    Understanding your needs and defining project scope.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    2. Design & Planning
                  </Typography>
                  <Typography variant="body2">
                    Creating wireframes, mockups, and technical architecture.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    3. Development
                  </Typography>
                  <Typography variant="body2">
                    Building the solution with regular client feedback.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    4. Testing & Deployment
                  </Typography>
                  <Typography variant="body2">
                    Quality assurance and successful launch.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="contained" 
            color="primary"
            component={RouterLink}
            to="/services"
            sx={{ mr: 2 }}
          >
            Back to Services
          </Button>
          <Button 
            variant="outlined"
            component={RouterLink}
            to="/contact"
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceDetailPage;