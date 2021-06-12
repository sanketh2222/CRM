package com.investments.crm.repository;

import com.investments.crm.entity.Customer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,Integer> {
    
}
