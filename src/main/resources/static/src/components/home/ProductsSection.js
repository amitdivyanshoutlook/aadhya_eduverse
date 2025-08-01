import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  Stack,
  useTheme,
  alpha,
  Fade,
  Slide
} from '@mui/material';
import {
  Psychology,
  School,
  Analytics,
  ArrowForward,
  Star,
  TrendingUp,
  AutoAwesome
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProductsSection = ({ products }) => {
  const theme = useTheme();

  const getProductIcon = (productName) => {
    if (productName?.toLowerCase().includes('ai')) return <Psychology />;
    if (productName?.toLowerCase().includes('lms')) return <School />;
    if (productName?.toLowerCase().includes('analytics')) return <Analytics />;
    return <AutoAwesome />;
  };

  const getGradientColor = (index) => {
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
        background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 10% 20%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="🚀 Our Products"
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
              component="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800
              }}
            >
              Innovative Solutions for Modern Education
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
              Discover our cutting-edge educational technology solutions designed to 
              transform learning experiences and accelerate student success.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {products && products.slice(0, 3).map((product, index) => (
            <Grid item key={product.id} xs={12} md={4}>
              <Slide in timeout={1000 + index * 200} direction="up">
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
                      '& .product-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                      '& .product-gradient': {
                        opacity: 1,
                      }
                    }
                  }}
                >
                  {/* Gradient Background */}
                  <Box
                    className="product-gradient"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '120px',
                      background: getGradientColor(index),
                      opacity: 0.9,
                      transition: 'opacity 0.3s ease'
                    }}
                  />

                  {/* Product Icon */}
                  <Box
                    sx={{
                      position: 'relative',
                      pt: 4,
                      pb: 2,
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Avatar
                      className="product-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <Box sx={{ fontSize: 40, color: 'white' }}>
                        {getProductIcon(product.name)}
                      </Box>
                    </Avatar>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, pt: 0, px: 3, pb: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: 'text.primary',
                        textAlign: 'center'
                      }}
                    >
                      {product.name}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        textAlign: 'center'
                      }}
                    >
                      {product.shortDescription}
                    </Typography>

                    {/* Features */}
                    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
                      <Chip
                        icon={<Star />}
                        label="Popular"
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.warning.main, 0.1),
                          color: 'warning.main',
                          fontWeight: 600
                        }}
                      />
                      <Chip
                        icon={<TrendingUp />}
                        label="Advanced"
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.success.main, 0.1),
                          color: 'success.main',
                          fontWeight: 600
                        }}
                      />
                    </Stack>

                    <Button
                      component={Link}
                      to={`/products/${product.id}`}
                      variant="contained"
                      endIcon={<ArrowForward />}
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: '1rem',
                        background: getGradientColor(index),
                        '&:hover': {
                          background: getGradientColor(index),
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                        }
                      }}
                    >
                      Explore Product
                    </Button>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Fade in timeout={1500}>
          <Box
            sx={{
              textAlign: 'center',
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                  radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `,
                pointerEvents: 'none'
              }}
            />
            
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, position: 'relative' }}>
              Ready to Transform Your Learning Experience?
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, position: 'relative' }}>
              Explore all our innovative products and find the perfect solution for your educational needs.
            </Typography>
            
            <Button
              component={Link}
              to="/products"
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
              View All Products
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ProductsSection;