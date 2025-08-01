import React, { useEffect, useState } from 'react';
import { 
  Typography, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  Box,
  CircularProgress,
  Alert,
  Card,
  Avatar,
  Fade,
  Slide
} from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import PageLayout from '../components/common/PageLayout';
import api from '../services/api';

const ContactPage = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: companyInfo?.email || 'contact@aadhyaeduverse.com',
      color: '#087CFA'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: companyInfo?.phone || '+91 9876543210',
      color: '#059862'
    },
    {
      icon: <LocationOn />,
      title: 'Address',
      value: companyInfo?.address || '123 Tech Park, Innovation Street, Bangalore, India',
      color: '#FF6B35'
    }
  ];

  if (loading) {
    return (
      <PageLayout
        title="Contact Us"
        subtitle="Get in touch with our team"
        breadcrumbs={['Contact Us']}
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
            Loading contact information...
          </Typography>
        </Box>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout
        title="Contact Us"
        subtitle="Get in touch with our team"
        breadcrumbs={['Contact Us']}
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
      title="Contact Us"
      subtitle="Have questions or want to learn more about our products and services? Get in touch with us!"
      breadcrumbs={['Contact Us']}
      heroBackground="gradient"
    >
      <Grid container spacing={6}>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Fade in timeout={800}>
            <Box>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                Get In Touch
              </Typography>
              <Typography paragraph sx={{ mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
                We'd love to hear from you. Please feel free to contact us using the information below or fill out the contact form.
              </Typography>

              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} key={index}>
                    <Slide in timeout={1000 + index * 200} direction="right">
                      <Card 
                        sx={{ 
                          p: 3,
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          <Avatar
                            sx={{
                              bgcolor: info.color,
                              width: 56,
                              height: 56,
                              boxShadow: `0 4px 16px ${info.color}40`
                            }}
                          >
                            {info.icon}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                              {info.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              {info.value}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Slide in timeout={1200} direction="left">
            <Card sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Send Us a Message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#F7F8FA',
                          '&:hover': {
                            backgroundColor: '#FFFFFF'
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#FFFFFF'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#F7F8FA',
                          '&:hover': {
                            backgroundColor: '#FFFFFF'
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#FFFFFF'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#F7F8FA',
                          '&:hover': {
                            backgroundColor: '#FFFFFF'
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#FFFFFF'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#F7F8FA',
                          '&:hover': {
                            backgroundColor: '#FFFFFF'
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#FFFFFF'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        mt: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Slide>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default ContactPage;