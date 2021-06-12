package com.investments.crm.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Customer {

    @Id
    @GeneratedValue
    private int id;

    private String First_name;

    private String Last_name;

    private String email;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_name() {
        return First_name;
    }

    public void setFirst_name(String first_name) {
        First_name = first_name;
    }

    public String getLast_name() {
        return Last_name;
    }

    public Customer(){

    }

    public Customer(int id, String first_name, String last_name, String email) {
        this.id = id;
        First_name = first_name;
        Last_name = last_name;
        this.email = email;
    }

    @Override
    public String toString() {
        return "Customer [First_name=" + First_name + ", Last_name=" + Last_name + ", email=" + email + ", id=" + id
                + "]";
    }

    public void setLast_name(String last_name) {
        Last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    


    
}
