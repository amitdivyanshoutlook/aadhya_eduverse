---
description: Repository Information Overview
alwaysApply: true
---

# Aadhya Eduverse Information

## Summary
Aadhya Eduverse is a Spring Boot web application for Aadhya Eduverse Private Limited's educational website. The project uses Spring Boot 3.5.4 with a React frontend. It showcases the company's products (like explainable AI) and services (training on Java, Python, MS SQL, and competitive exam preparation).

## Structure
- **src/main/java**: Java source code with models, repositories, services, and controllers
- **src/main/resources/static**: React frontend application
- **src/test**: Test classes for the application
- **pom.xml**: Maven project configuration file

## Language & Runtime
**Language**: Java 21 (Backend), JavaScript/React (Frontend)
**Build System**: Maven (Backend), npm (Frontend)
**Package Manager**: Maven (Backend), npm (Frontend)

## Dependencies
**Backend Dependencies**:
- Spring Boot Starter Web/WebFlux 3.5.4
- Spring Boot Starter Data JPA
- Spring Boot Starter Validation
- Microsoft SQL Server JDBC Driver
- Project Lombok

**Frontend Dependencies**:
- React 18
- React Router 6
- Material UI 5
- Axios

## Database
**Type**: Microsoft SQL Server
**Configuration**: JPA/Hibernate with automatic schema generation
**Entities**: Product, Service, CompanyInfo

## API Endpoints
**Products**: `/api/products` - Company's educational products
**Services**: `/api/services` - Training and development services
**Company Info**: `/api/company` - Company information
**Home Data**: `/api/home` - Combined data for homepage

## Frontend Structure
**Components**:
- Common: Header, Footer
- Home: Hero, ProductsSection, ServicesSection
- Pages: Home, Products, Services, About, Contact

## Build & Installation
```bash
# Backend
./mvnw clean install
./mvnw spring-boot:run

# Frontend (in src/main/resources/static)
npm install
npm start
```

## Features
- Product showcase (Explainable AI Platform, EduVerse LMS)
- Services listing (Training on Java, Python, MS SQL)
- Competitive exam preparation (O Level)
- Website development services
- Contact and about pages