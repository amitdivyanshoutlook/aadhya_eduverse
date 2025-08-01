import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  CircularProgress, 
  Alert, 
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Fade,
  Slide
} from '@mui/material';
import PageLayout from '../components/common/PageLayout';
import ModernCard from '../components/common/ModernCard';
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
      <PageLayout
        title="Our Services"
        subtitle="Professional training and educational services"
        breadcrumbs={['Services']}
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
            Loading our comprehensive services...
          </Typography>
        </Box>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout
        title="Our Services"
        subtitle="Professional training and educational services"
        breadcrumbs={['Services']}
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
      title="Our Services"
      subtitle="We offer a wide range of educational services to help students and professionals develop their skills and advance their careers."
      breadcrumbs={['Services']}
      heroBackground="gradient"
    >
      {/* Category Tabs */}
      <Paper 
        elevation={1} 
        sx={{ 
          mb: 6, 
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              minHeight: '48px',
              px: 3
            }
          }}
        >
          <Tab label="All Services" />
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Paper>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {filteredServices.map((service, index) => (
          <Grid item key={service.id} xs={12} sm={6} lg={4}>
            <Slide in timeout={800 + index * 100} direction="up">
              <Box>
                <ModernCard
                  title={service.name}
                  description={service.shortDescription}
                  imageUrl={service.imageUrl || '/images/service-placeholder.jpg'}
                  category={service.category}
                  link={`/services/${service.id}`}
                  linkText="Learn More"
                  variant={index < 2 ? 'featured' : 'default'}
                />
              </Box>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default ServicesPage;