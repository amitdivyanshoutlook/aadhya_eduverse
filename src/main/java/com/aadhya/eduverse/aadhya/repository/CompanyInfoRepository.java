package com.aadhya.eduverse.aadhya.repository;

import com.aadhya.eduverse.aadhya.model.CompanyInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyInfoRepository extends JpaRepository<CompanyInfo, Long> {
    // Usually there will be only one company info record
}