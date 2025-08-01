package com.aadhya.eduverse.aadhya.controller;

import com.aadhya.eduverse.aadhya.model.CompanyInfo;
import com.aadhya.eduverse.aadhya.service.CompanyInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/company")
public class CompanyInfoController {
    
    private final CompanyInfoService companyInfoService;
    
    @Autowired
    public CompanyInfoController(CompanyInfoService companyInfoService) {
        this.companyInfoService = companyInfoService;
    }
    
    @GetMapping
    public ResponseEntity<CompanyInfo> getCompanyInfo() {
        return companyInfoService.getCompanyInfo()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<CompanyInfo> createOrUpdateCompanyInfo(@RequestBody CompanyInfo companyInfo) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(companyInfoService.saveCompanyInfo(companyInfo));
    }
}