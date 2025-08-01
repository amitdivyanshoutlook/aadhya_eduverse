package com.aadhya.eduverse.aadhya.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOriginPatterns("http://localhost:3000", "http://localhost:8080")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
    
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Forward requests to the React app (excluding API routes and static resources)
        registry.addViewController("/")
                .setViewName("forward:/index.html");
        registry.addViewController("/{spring:\\w+}")
                .setViewName("forward:/index.html");
    }
}