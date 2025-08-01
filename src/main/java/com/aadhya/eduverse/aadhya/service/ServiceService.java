package com.aadhya.eduverse.aadhya.service;

import com.aadhya.eduverse.aadhya.model.Service;
import com.aadhya.eduverse.aadhya.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ServiceService {
    
    private final ServiceRepository serviceRepository;
    
    @Autowired
    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    
    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }
    
    public List<Service> getServicesByCategory(String category) {
        return serviceRepository.findByCategory(category);
    }
    
    public Optional<Service> getServiceById(Long id) {
        return serviceRepository.findById(id);
    }
    
    public Service saveService(Service service) {
        return serviceRepository.save(service);
    }
    
    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }
}