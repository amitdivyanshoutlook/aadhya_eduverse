package com.aadhya.eduverse.aadhya.controller;

import com.aadhya.eduverse.aadhya.model.Service;
import com.aadhya.eduverse.aadhya.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {
    
    private final ServiceService serviceService;
    
    @Autowired
    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }
    
    @GetMapping
    public ResponseEntity<List<Service>> getAllServices() {
        return ResponseEntity.ok(serviceService.getAllServices());
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Service>> getServicesByCategory(@PathVariable String category) {
        return ResponseEntity.ok(serviceService.getServicesByCategory(category));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Service> getServiceById(@PathVariable Long id) {
        return serviceService.getServiceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<Service> createService(@RequestBody Service service) {
        Service savedService = serviceService.saveService(service);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedService);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service service) {
        return serviceService.getServiceById(id)
                .map(existingService -> {
                    service.setId(id);
                    Service updatedService = serviceService.saveService(service);
                    return ResponseEntity.ok(updatedService);
                })
                .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        return serviceService.getServiceById(id)
                .map(service -> {
                    serviceService.deleteService(id);
                    return new ResponseEntity<Void>(HttpStatus.OK);
                })
                .orElse(new ResponseEntity<Void>(HttpStatus.NOT_FOUND));
    }
}