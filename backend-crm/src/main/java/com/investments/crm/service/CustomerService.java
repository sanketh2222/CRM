package com.investments.crm.service;

import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.investments.crm.entity.Customer;
import com.investments.crm.repository.CustomerRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@Transactional
public class CustomerService {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    CustomerRepo customerRepo;

    public int insert(Customer customer){
        entityManager.persist(customer);
        return customer.getId();
    }

    public int deleteCust(int id){
        customerRepo.deleteById(id);

        return 1;
    }

    public String checkById(int id){
        Optional<Customer> c  = customerRepo.findById(id);
        if (c.isEmpty()){
            return "No";
        }
        return "Yes";
        
    }

    public Customer findCustomerById(int id){
        Optional<Customer> cust  = customerRepo.findById(id);
        if (cust.isPresent()){
            return cust.get();
        } 
        return null;
    }

    public List<Customer>  findCustomers(){
        List<Customer> customers = customerRepo.findAll();
        
        return customers;
    }
}
