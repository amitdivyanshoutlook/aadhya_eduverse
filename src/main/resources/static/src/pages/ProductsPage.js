import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  CircularProgress, 
  Alert, 
  Box,
  Typography,
  Fade,
  Slide
} from '@mui/material';
import PageLayout from '../components/common/PageLayout';
import ModernCard from '../components/common/ModernCard';
import api from '../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.getAllProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <PageLayout
        title="Our Products"
        subtitle="Discover our innovative educational technology solutions"
        breadcrumbs={['Products']}
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
            Loading our amazing products...
          </Typography>
        </Box>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout
        title="Our Products"
        subtitle="Discover our innovative educational technology solutions"
        breadcrumbs={['Products']}
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
      title="Our Products"
      subtitle="Discover our innovative educational technology solutions designed to enhance learning experiences and improve outcomes."
      breadcrumbs={['Products']}
      heroBackground="gradient"
    >
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={product.id} xs={12} sm={6} lg={4}>
            <Slide in timeout={800 + index * 100} direction="up">
              <Box>
                <ModernCard
                  title={product.name}
                  description={product.shortDescription}
                  imageUrl={product.imageUrl || '/images/product-placeholder.jpg'}
                  category={product.category}
                  link={`/products/${product.id}`}
                  linkText="Learn More"
                  variant={index === 0 ? 'featured' : 'default'}
                />
              </Box>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default ProductsPage;