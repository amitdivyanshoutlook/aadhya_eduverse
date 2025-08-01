import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  useTheme,
  alpha
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ModernCard = ({
  title,
  description,
  imageUrl,
  category,
  link,
  linkText = 'Learn More',
  variant = 'default', // 'default', 'featured', 'compact'
  actions,
  children,
  ...props
}) => {
  const theme = useTheme();

  const getCardStyles = () => {
    const baseStyles = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.2s ease-in-out',
      backgroundColor: '#FFFFFF',
      border: '1px solid #DFE1E5',
      borderRadius: 2,
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        borderColor: '#C1C7D0',
      }
    };

    switch (variant) {
      case 'featured':
        return {
          ...baseStyles,
          border: `2px solid ${theme.palette.primary.main}`,
          '&:hover': {
            ...baseStyles['&:hover'],
            borderColor: theme.palette.primary.dark,
            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
          }
        };
      case 'compact':
        return {
          ...baseStyles,
          '&:hover': {
            ...baseStyles['&:hover'],
            transform: 'translateY(-2px)',
          }
        };
      default:
        return baseStyles;
    }
  };

  return (
    <Card sx={getCardStyles()} {...props}>
      {imageUrl && (
        <CardMedia
          component="img"
          height={variant === 'compact' ? '160' : '200'}
          image={imageUrl}
          alt={title}
          sx={{
            objectFit: 'cover',
            backgroundColor: '#F7F8FA'
          }}
        />
      )}
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {category && (
          <Chip
            label={category}
            size="small"
            sx={{
              mb: 2,
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              fontWeight: 500,
              fontSize: '0.75rem',
              height: '24px'
            }}
          />
        )}
        
        <Typography
          variant={variant === 'compact' ? 'h6' : 'h5'}
          component="h3"
          sx={{
            mb: 2,
            fontWeight: 600,
            lineHeight: 1.3,
            color: '#000000'
          }}
        >
          {title}
        </Typography>
        
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              mb: children ? 2 : 0
            }}
          >
            {description}
          </Typography>
        )}
        
        {children}
      </CardContent>
      
      {(actions || link) && (
        <CardActions sx={{ p: 3, pt: 0 }}>
          {actions || (
            <Button
              component={RouterLink}
              to={link}
              variant="text"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.04)
                }
              }}
            >
              {linkText}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default ModernCard;