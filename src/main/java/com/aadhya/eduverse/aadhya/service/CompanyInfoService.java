package com.aadhya.eduverse.aadhya.service;

import com.aadhya.eduverse.aadhya.model.CompanyInfo;
import com.aadhya.eduverse.aadhya.repository.CompanyInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyInfoService {
    
    private final CompanyInfoRepository companyInfoRepository;
    
    @Autowired
    public CompanyInfoService(CompanyInfoRepository companyInfoRepository) {
        this.companyInfoRepository = companyInfoRepository;
    }
    
    public Optional<CompanyInfo> getCompanyInfo() {
        // Assuming there's only one company info record, return the first one
        return companyInfoRepository.findAll().stream().findFirst();
    }
    
    public CompanyInfo saveCompanyInfo(CompanyInfo companyInfo) {
        return companyInfoRepository.save(companyInfo);
    }
}