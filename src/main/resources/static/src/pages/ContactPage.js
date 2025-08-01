import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Email, Phone, LocationOn } from '@mui/icons-material';
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
          <Typography color="text.primary">Contact Us</Typography>
        </Breadcrumbs>

        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Have questions or want to learn more about our products and services? Get in touch with us!
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Get In Touch
              </Typography>
              <Typography paragraph>
                We'd love to hear from you. Please feel free to contact us using the information below or fill out the contact form.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4 }}>
                <Email sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2">Email</Typography>
                  <Typography variant="body2">
                    {companyInfo?.email || 'contact@aadhyaeduverse.com'}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2">Phone</Typography>
                  <Typography variant="body2">
                    {companyInfo?.phone || '+91 9876543210'}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2">Address</Typography>
                  <Typography variant="body2">
                    {companyInfo?.address || '123 Tech Park, Innovation Street, Bangalore, India'}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      margin="normal"
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
                      margin="normal"
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
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ mt: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;