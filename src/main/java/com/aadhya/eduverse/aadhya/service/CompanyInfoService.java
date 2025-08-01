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
        // Try to get company info from database
        Optional<CompanyInfo> companyInfo = companyInfoRepository.findAll().stream().findFirst();
        
        // If no data exists, return default company information
        if (companyInfo.isEmpty()) {
            CompanyInfo defaultInfo = new CompanyInfo();
            defaultInfo.setName("Aadhya Eduverse");
            defaultInfo.setTagline("Empowering Education Through Technology");
            defaultInfo.setEmail("aadhyaeduverse@divyaam.net");
            defaultInfo.setPhone("+918860905412");
            defaultInfo.setAddress("Bahjoi, Sambhal UP. India 244410");
            defaultInfo.setAbout("Leading educational technology company specializing in AI-powered learning solutions and professional training services.");
            defaultInfo.setWebsiteUrl("https://aadhyaeduverse.com");
            
            return Optional.of(defaultInfo);
        }
        
        return companyInfo;
    }
    
    public CompanyInfo saveCompanyInfo(CompanyInfo companyInfo) {
        return companyInfoRepository.save(companyInfo);
    }
}