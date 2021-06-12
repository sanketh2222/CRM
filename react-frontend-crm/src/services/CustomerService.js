import axios from 'axios';

const CRM_API_BASE_URL = "http://localhost:8080/Customers";

class CustomerService {

    getCustomers(){
        return axios.get(CRM_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CRM_API_BASE_URL+"/add", customer);
    }

    getCustomerById(customerId){
        return axios.get(CRM_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer, customerId){
        return axios.put(CRM_API_BASE_URL + '/' + customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(CRM_API_BASE_URL + '/delete/' + customerId);
    }
}

export default new CustomerService()