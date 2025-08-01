import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
  Chip,
  Avatar,
  useTheme
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  School,
  Code,
  Psychology,
  TrendingUp,
  ArrowUpward
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import api from '../../services/api';

const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await api.getCompanyInfo();
        setCompanyInfo(response.data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    fetchCompanyInfo();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Instagram />, url: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'Services', path: '/services' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

  const serviceCategories = [
    { text: 'Java Training', icon: <Code />, path: '/services' },
    { text: 'Python for Data Science', icon: <Psychology />, path: '/services' },
    { text: 'MS SQL Training', icon: <TrendingUp />, path: '/services' },
    { text: 'O Level Preparation', icon: <School />, path: '/services' }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        mt: 'auto'
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
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', py: 8 }}>
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    mr: 2,
                    width: 56,
                    height: 56
                  }}
                >
                  <School sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                    {companyInfo?.name || 'Aadhya Eduverse'}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {companyInfo?.tagline || 'Empowering Education Through Technology'}
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
                {companyInfo?.about?.substring(0, 150) || 
                 'Leading educational technology company specializing in AI-powered learning solutions and professional training services.'}
                {companyInfo?.about?.length > 150 && '...'}
              </Typography>
            </Box>

            {/* Contact Info */}
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    p: 1,
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Email sx={{ fontSize: 20 }} />
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {companyInfo?.email || 'contact@aadhyaeduverse.com'}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    p: 1,
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Phone sx={{ fontSize: 20 }} />
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {companyInfo?.phone || '+91 9876543210'}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    p: 1,
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 0.5
                  }}
                >
                  <LocationOn sx={{ fontSize: 20 }} />
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.5 }}>
                  {companyInfo?.address || '123 Tech Park, Innovation Street, Bangalore, India'}
                </Typography>
              </Box>
            </Stack>

            {/* Social Links */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.2)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 20px rgba(255,255,255,0.2)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: 'white',
                      transform: 'translateX(4px)',
                      textDecoration: 'underline'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
              Our Services
            </Typography>
            <Stack spacing={2}>
              {serviceCategories.map((service, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={service.path}
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'white',
                      transform: 'translateX(4px)'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Box sx={{ mr: 1.5, opacity: 0.8 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="body2">
                    {service.text}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter & CTA */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
              Subscribe to our newsletter for the latest updates on courses, technology trends, and educational insights.
            </Typography>
            
            <Stack spacing={2}>
              <Chip
                label="🚀 New Courses Available"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 600,
                  alignSelf: 'flex-start'
                }}
              />
              <Chip
                label="💡 AI & Machine Learning"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 600,
                  alignSelf: 'flex-start'
                }}
              />
              <Chip
                label="🎓 Certification Programs"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 600,
                  alignSelf: 'flex-start'
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, bgcolor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9, textAlign: { xs: 'center', md: 'left' } }}>
            © {new Date().getFullYear()} {companyInfo?.name || 'Aadhya Eduverse Private Limited'}. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={3} sx={{ opacity: 0.9 }}>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '0.875rem' }}>
              Cookie Policy
            </Link>
          </Stack>

          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.3)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;