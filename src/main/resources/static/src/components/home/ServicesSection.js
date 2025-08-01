import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Avatar,
  Chip,
  Stack,
  useTheme,
  alpha,
  Fade,
  Slide,
  IconButton
} from '@mui/material';
import {
  Code,
  Psychology,
  Storage,
  School,
  Web,
  Build,
  ArrowForward,
  AccessTime,
  Group,
  Star,
  TrendingUp
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ServicesSection = ({ servicesByCategory }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const categories = Object.keys(servicesByCategory || {});
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getServiceIcon = (serviceName) => {
    const name = serviceName?.toLowerCase() || '';
    if (name.includes('java')) return <Code />;
    if (name.includes('python')) return <Psychology />;
    if (name.includes('sql') || name.includes('database')) return <Storage />;
    if (name.includes('level') || name.includes('exam')) return <School />;
    if (name.includes('website') || name.includes('web')) return <Web />;
    return <Build />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Training': '#4CAF50',
      'Competitive Exam': '#FF9800',
      'Development': '#2196F3',
      'Consulting': '#9C27B0'
    };
    return colors[category] || '#607D8B';
  };

  const getServiceGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
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
            radial-gradient(circle at 90% 10%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="💼 Our Services"
              sx={{
                mb: 3,
                bgcolor: alpha(theme.palette.secondary.main, 0.1),
                color: 'secondary.main',
                fontWeight: 700,
                fontSize: '1rem',
                px: 3,
                py: 1
              }}
            />
            
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800
              }}
            >
              Professional Training & Development
            </Typography>
            
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              Comprehensive educational services designed to accelerate your career growth 
              and help you master the latest technologies and industry best practices.
            </Typography>
          </Box>
        </Fade>

        {categories.length > 0 && (
          <>
            {/* Category Tabs */}
            <Fade in timeout={1200}>
              <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 4,
                    p: 1,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                      '& .MuiTab-root': {
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '1rem',
                        minHeight: 48,
                        px: 3,
                        borderRadius: 3,
                        mx: 0.5,
                        transition: 'all 0.2s ease',
                        '&.Mui-selected': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                        }
                      },
                      '& .MuiTabs-indicator': {
                        display: 'none'
                      }
                    }}
                  >
                    {categories.map((category, index) => (
                      <Tab
                        key={index}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: getCategoryColor(category)
                              }}
                            />
                            {category}
                          </Box>
                        }
                      />
                    ))}
                  </Tabs>
                </Box>
              </Box>
            </Fade>

            {/* Service Cards */}
            {categories.map((category, categoryIndex) => (
              <Box key={category} sx={{ display: activeTab === categoryIndex ? 'block' : 'none' }}>
                <Grid container spacing={4} sx={{ mb: 6 }}>
                  {servicesByCategory[category]?.map((service, serviceIndex) => (
                    <Grid item key={service.id} xs={12} sm={6} lg={4}>
                      <Slide in timeout={800 + serviceIndex * 200} direction="up">
                        <Card
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden',
                            border: 'none',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              transform: 'translateY(-12px)',
                              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                              '& .service-icon': {
                                transform: 'scale(1.1) rotate(5deg)',
                              },
                              '& .service-gradient': {
                                opacity: 1,
                              }
                            }
                          }}
                        >
                          {/* Header with Gradient */}
                          <Box
                            className="service-gradient"
                            sx={{
                              position: 'relative',
                              p: 3,
                              background: getServiceGradient(serviceIndex),
                              color: 'white',
                              opacity: 0.9,
                              transition: 'opacity 0.3s ease'
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <Avatar
                                className="service-icon"
                                sx={{
                                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                                  backdropFilter: 'blur(10px)',
                                  mr: 2,
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                {getServiceIcon(service.name)}
                              </Avatar>
                              <Chip
                                label={category}
                                size="small"
                                sx={{
                                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white',
                                  fontWeight: 600
                                }}
                              />
                            </Box>
                            
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                mb: 1,
                                lineHeight: 1.3
                              }}
                            >
                              {service.name}
                            </Typography>
                          </Box>

                          <CardContent sx={{ flexGrow: 1, p: 3 }}>
                            <Typography
                              variant="body1"
                              color="text.secondary"
                              sx={{
                                mb: 3,
                                lineHeight: 1.6
                              }}
                            >
                              {service.shortDescription}
                            </Typography>

                            {/* Service Features */}
                            <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                              <Chip
                                icon={<AccessTime />}
                                label="Flexible Schedule"
                                size="small"
                                variant="outlined"
                                sx={{ fontWeight: 600 }}
                              />
                              <Chip
                                icon={<Group />}
                                label="Expert Mentors"
                                size="small"
                                variant="outlined"
                                sx={{ fontWeight: 600 }}
                              />
                              <Chip
                                icon={<Star />}
                                label="Certified"
                                size="small"
                                variant="outlined"
                                sx={{ fontWeight: 600 }}
                              />
                            </Stack>

                            <Button
                              component={Link}
                              to={`/services/${service.id}`}
                              variant="contained"
                              endIcon={<ArrowForward />}
                              fullWidth
                              sx={{
                                py: 1.5,
                                fontWeight: 700,
                                fontSize: '1rem',
                                background: getServiceGradient(serviceIndex),
                                '&:hover': {
                                  background: getServiceGradient(serviceIndex),
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                                }
                              }}
                            >
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </Slide>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </>
        )}

        {/* CTA Section */}
        <Fade in timeout={1500}>
          <Box
            sx={{
              textAlign: 'center',
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `,
                pointerEvents: 'none'
              }}
            />
            
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, position: 'relative' }}>
              Ready to Advance Your Career?
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, position: 'relative' }}>
              Join thousands of professionals who have transformed their careers with our expert training programs.
            </Typography>
            
            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                position: 'relative',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              Explore All Services
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ServicesSection;