import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then( res => {
            this.setState({customers: this.state.customers.filter(customer => customer.id !== id)});
        });
    }
    viewCustomer(id){
        this.props.history.push(`/view-customers/${id}`);
    }
    editCustomer(id){
        this.props.history.push(`/update-customer/${id}`);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push(`/add-customers/_add`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Customers List</h2>
                 
                 <button className="btn btn-primary"  onClick={this.addCustomer}> Add Customer</button>
                 <br></br>
                 {/* <div className = "row">
                    <button className="btn btn-primary"  onClick={this.addCustomer}> Add Customer</button>
                 </div> */}
                 {/* <br></br> */}
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Customer First Name</th>
                                    <th> Customer Last Name</th>
                                    <th> Customer Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.id}>
                                             <td> { customer.first_name} </td>   
                                             <td> {customer.last_name}</td>
                                             <td> {customer.email}</td>
                                             <td>
                                                 <button onClick={ () => this.editCustomer(customer.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCustomerComponent
