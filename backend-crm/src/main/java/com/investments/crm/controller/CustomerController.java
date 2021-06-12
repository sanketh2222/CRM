package com.investments.crm.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import com.investments.crm.entity.Customer;
import com.investments.crm.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
// @RequestMapping(value = "/view-employee/3")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping("/Customers/add")
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
        int id = customerService.insert(customer);

        log.info("customer created with id:"+id);
        
        return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);

    }

    @DeleteMapping("/Customers/delete/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable int id ){
        String resp = customerService.checkById(id);
        log.info("resp is "+resp);
        if (resp.equals("No")){
            return new ResponseEntity<String>("Customer does not exist", HttpStatus.NOT_FOUND);
        }
        customerService.deleteCust(id);
        log.info("customer "+id+" deleted successfully");
        return new ResponseEntity<String>("Customer Deleted Successfully", HttpStatus.OK);
    }

    @GetMapping("/Customers/{id}")
    public ResponseEntity<Customer> findCustomerbyId(@PathVariable int id ){
        if (customerService.findCustomerById(id) != null){
            return new ResponseEntity<Customer>(customerService.findCustomerById(id), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/Customers")
    public ResponseEntity<List<Customer>> findCustomers(){
        if (customerService.findCustomers() != null){
            return new ResponseEntity<List<Customer>>(customerService.findCustomers(), HttpStatus.OK);
        }
        
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
}


