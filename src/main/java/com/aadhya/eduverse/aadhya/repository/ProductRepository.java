package com.aadhya.eduverse.aadhya.repository;

import com.aadhya.eduverse.aadhya.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom query methods can be added here if needed
}