import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
// import EmployeeService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.id).then( (res) =>{
                let customer = res.data;
                this.setState({first_name: customer.first_name,
                    last_name: customer.last_name,
                    email : customer.email
                });
            });
        }        
    }
    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email};
        console.log('customer => ' + JSON.stringify(customer));

        // step 5
        if(this.state.id === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                this.props.history.push('/customers');
            });
        }else{
            CustomerService.updateCustomer(customer, this.state.id).then( res => {
                this.props.history.push('/customers');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/customers');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Customer</h3>
        }else{
            return <h3 className="text-center">Update Customer</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.last_Name} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateCustomerComponent
