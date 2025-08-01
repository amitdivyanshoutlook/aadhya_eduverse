package com.aadhya.eduverse.aadhya.controller;

import com.aadhya.eduverse.aadhya.model.CompanyInfo;
import com.aadhya.eduverse.aadhya.model.Product;
import com.aadhya.eduverse.aadhya.model.Service;
import com.aadhya.eduverse.aadhya.service.CompanyInfoService;
import com.aadhya.eduverse.aadhya.service.ProductService;
import com.aadhya.eduverse.aadhya.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HomeController {
    
    private final CompanyInfoService companyInfoService;
    private final ProductService productService;
    private final ServiceService serviceService;
    
    @Autowired
    public HomeController(
            CompanyInfoService companyInfoService,
            ProductService productService,
            ServiceService serviceService) {
        this.companyInfoService = companyInfoService;
        this.productService = productService;
        this.serviceService = serviceService;
    }
    
    @GetMapping("/home")
    public ResponseEntity<Map<String, Object>> getHomeData() {
        Map<String, Object> response = new HashMap<>();
        
        // Get company info
        companyInfoService.getCompanyInfo().ifPresent(info -> response.put("companyInfo", info));
        
        // Get products
        List<Product> products = productService.getAllProducts();
        response.put("products", products);
        
        // Get services by category
        List<Service> trainingServices = serviceService.getServicesByCategory("Training");
        List<Service> examServices = serviceService.getServicesByCategory("Competitive Exam");
        List<Service> developmentServices = serviceService.getServicesByCategory("Development");
        
        Map<String, List<Service>> servicesByCategory = new HashMap<>();
        servicesByCategory.put("Training", trainingServices);
        servicesByCategory.put("Competitive Exam", examServices);
        servicesByCategory.put("Development", developmentServices);
        
        response.put("servicesByCategory", servicesByCategory);
        
        return ResponseEntity.ok(response);
    }
}