# Aadhya Eduverse Frontend

This directory will contain the React frontend application for Aadhya Eduverse.

## Setup Instructions

1. Initialize a new React application in this directory:
   ```bash
   npx create-react-app .
   ```

2. Install required dependencies:
   ```bash
   npm install axios react-router-dom bootstrap @mui/material @mui/icons-material
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

The React application should be structured as follows:

```
src/
├── components/
│   ├── common/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Navbar.js
│   ├── home/
│   │   ├── Hero.js
│   │   ├── ProductsSection.js
│   │   └── ServicesSection.js
│   ├── products/
│   │   ├── ProductList.js
│   │   └── ProductDetail.js
│   └── services/
│       ├── ServiceList.js
│       └── ServiceDetail.js
├── pages/
│   ├── HomePage.js
│   ├── ProductsPage.js
│   ├── ServicesPage.js
│   ├── AboutPage.js
│   └── ContactPage.js
├── services/
│   └── api.js
├── utils/
│   └── helpers.js
├── App.js
└── index.js
```

## API Integration

The frontend will communicate with the Spring Boot backend using the following API endpoints:

- `/api/home` - Get all data for the home page
- `/api/products` - Get all products
- `/api/products/{id}` - Get a specific product
- `/api/services` - Get all services
- `/api/services/{id}` - Get a specific service
- `/api/services/category/{category}` - Get services by category
- `/api/company` - Get company information

## Design Guidelines

- Use a clean, modern design with the company's branding colors
- Ensure responsive design for all screen sizes
- Implement accessible UI components
- Use Material UI components for consistent styling