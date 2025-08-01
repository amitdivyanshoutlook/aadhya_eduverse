import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Avatar,
  Chip
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  School as SchoolIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  Build as BuildIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import api from '../../services/api';

const Header = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Products', path: '/products', icon: <BusinessIcon /> },
    { text: 'Services', path: '/services', icon: <BuildIcon /> },
    { text: 'About', path: '/about', icon: <InfoIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> }
  ];

  const isActivePath = (path) => location.pathname === path;

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
            <SchoolIcon />
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            {companyInfo?.name || 'Aadhya Eduverse'}
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              mx: 1,
              mb: 0.5,
              borderRadius: 2,
              bgcolor: isActivePath(item.path) ? 'primary.main' : 'transparent',
              color: isActivePath(item.path) ? 'white' : 'text.primary',
              '&:hover': {
                bgcolor: isActivePath(item.path) ? 'primary.dark' : 'action.hover',
              },
              textDecoration: 'none'
            }}
          >
            <Box sx={{ mr: 2, color: 'inherit' }}>
              {item.icon}
            </Box>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                fontWeight: isActivePath(item.path) ? 600 : 400 
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          color: 'text.primary'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {/* Logo and Brand */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Avatar 
                sx={{ 
                  bgcolor: 'primary.main', 
                  mr: 2,
                  width: 48,
                  height: 48,
                  boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)'
                }}
              >
                <SchoolIcon sx={{ fontSize: 28 }} />
              </Avatar>
              <Box>
                <Typography 
                  variant="h5" 
                  component={Link} 
                  to="/" 
                  sx={{ 
                    textDecoration: 'none', 
                    color: 'primary.main',
                    fontWeight: 800,
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    lineHeight: 1.2
                  }}
                >
                  {companyInfo?.name || 'Aadhya Eduverse'}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  {companyInfo?.tagline || 'Empowering Education Through Technology'}
                </Typography>
              </Box>
            </Box>
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                    variant={isActivePath(item.path) ? 'contained' : 'text'}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: isActivePath(item.path) ? 'white' : 'text.primary',
                      bgcolor: isActivePath(item.path) ? 'primary.main' : 'transparent',
                      '&:hover': {
                        bgcolor: isActivePath(item.path) ? 'primary.dark' : 'action.hover',
                        transform: 'translateY(-1px)',
                        boxShadow: isActivePath(item.path) 
                          ? '0 6px 20px rgba(25, 118, 210, 0.4)' 
                          : '0 2px 8px rgba(0, 0, 0, 0.1)'
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;