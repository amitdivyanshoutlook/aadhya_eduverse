package com.aadhya.eduverse.aadhya.controller;

import com.aadhya.eduverse.aadhya.dto.ContactFormDTO;
import com.aadhya.eduverse.aadhya.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<Map<String, Object>> sendContactEmail(@Valid @RequestBody ContactFormDTO contactForm, BindingResult bindingResult) {
        Map<String, Object> response = new HashMap<>();
        
        // Check for validation errors
        if (bindingResult.hasErrors()) {
            response.put("success", false);
            response.put("message", "Validation failed");
            
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            response.put("errors", errors);
            
            return ResponseEntity.badRequest().body(response);
        }
        
        try {
            // Send email to your business email
            emailService.sendContactEmail(contactForm);
            
            response.put("success", true);
            response.put("message", "Email sent successfully");
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Failed to send email: " + e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }
}