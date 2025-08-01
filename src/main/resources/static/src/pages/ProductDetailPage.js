import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Paper, Button, Breadcrumbs, Link, Grid, Divider } from '@mui/material';
import api from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.getProductById(id);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
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

  if (!product) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Product not found.</Typography>
        <Button component={RouterLink} to="/products" sx={{ mt: 2 }}>
          Back to Products
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
          <Link component={RouterLink} to="/products" underline="hover" color="inherit">
            Products
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
              <Box
                component="img"
                src={product.imageUrl || '/images/product-placeholder.jpg'}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              {product.shortDescription}
            </Typography>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
              {product.description}
            </Typography>
            
            {product.productUrl && (
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                href={product.productUrl}
                target="_blank"
                sx={{ mt: 2 }}
              >
                Learn More
              </Button>
            )}
            
            <Button 
              variant="outlined" 
              component={RouterLink} 
              to="/contact"
              sx={{ mt: 2, ml: product.productUrl ? 2 : 0 }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Key Features
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          {/* This would be dynamic in a real application */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  User-Friendly Interface
                </Typography>
                <Typography variant="body2">
                  Intuitive design that makes navigation and usage simple for all users.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Advanced Analytics
                </Typography>
                <Typography variant="body2">
                  Comprehensive data analysis tools to track progress and identify areas for improvement.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Seamless Integration
                </Typography>
                <Typography variant="body2">
                  Easily integrates with existing systems and platforms for a smooth workflow.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="contained" 
            color="primary"
            component={RouterLink}
            to="/products"
            sx={{ mr: 2 }}
          >
            Back to Products
          </Button>
          <Button 
            variant="outlined"
            component={RouterLink}
            to="/contact"
          >
            Request a Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;