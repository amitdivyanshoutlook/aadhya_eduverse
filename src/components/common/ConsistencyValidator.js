import React from 'react';
import { Box, Typography, Alert, Chip, Stack } from '@mui/material';
import { CheckCircle, Warning, Error } from '@mui/icons-material';
import useConsistentStyling from '../../hooks/useConsistentStyling';

/**
 * Development component to validate design consistency across the application
 * This component should only be used in development mode
 */
const ConsistencyValidator = ({ componentName, validations = [] }) => {
  const styles = useConsistentStyling();
  
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle color="success" />;
      case 'warning':
        return <Warning color="warning" />;
      case 'error':
        return <Error color="error" />;
      default:
        return <CheckCircle color="success" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'success';
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        maxWidth: 300,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 2,
        boxShadow: 3,
        zIndex: 9999,
        opacity: 0.9,
        '&:hover': {
          opacity: 1
        }
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 600 }}>
        🎨 Design Consistency Check
      </Typography>
      
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        Component: {componentName}
      </Typography>

      <Stack spacing={1}>
        {validations.map((validation, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {getStatusIcon(validation.status)}
            <Chip
              label={validation.message}
              size="small"
              color={getStatusColor(validation.status)}
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          </Box>
        ))}
      </Stack>

      {validations.length === 0 && (
        <Alert severity="info" sx={{ mt: 1 }}>
          No validations configured
        </Alert>
      )}
    </Box>
  );
};

export default ConsistencyValidator;