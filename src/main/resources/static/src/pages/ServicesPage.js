import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Breadcrumbs, Link, Tabs, Tab } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import api from '../services/api';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.getAllServices();
        setServices(response.data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(response.data.map(service => service.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredServices = activeTab === 0 
    ? services 
    : services.filter(service => service.category === categories[activeTab - 1]);

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
          <Typography color="text.primary">Services</Typography>
        </Breadcrumbs>

        <Typography variant="h3" component="h1" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 4 }}>
          We offer a wide range of educational services to help students and professionals develop their skills and advance their careers.
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="All Services" />
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredServices.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.imageUrl || '/images/service-placeholder.jpg'}
                  alt={service.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    {service.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.shortDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    component={RouterLink} 
                    to={`/services/${service.id}`}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;