import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../Grid";
import { List, ListItem } from "../List";



function Customers() {
  //  Setting initial state
  const [customers, setCustomers] = useState([])

  // Load all Customers and store them with setCustomer
  useEffect(() => {
    loadCustomers()
  }, [])

  // Loads all customers and sets them to customers
  function loadCustomers() {
    API.getCustomers()
    .then(res =>
      setCustomers(res.data)
    )
    .catch(err => console.log(err));
  };

  // Deletes a Customer from the database with a fiven id, then reloads Customers
  function deleteCustomer(id) {
    API.deleteCustomer(id)
      .then(res => loadCustomers())
      .catch(err => console.log(err));
  }

return (
  <Container fluid>
    <Row>
    <div class="col-md-6 offset-md-3">
        <Jumbotron>
          <h1>Customers</h1>
        </Jumbotron>
          {customers.length ? (
            <>
            <List>
              {customers.map(customers => (      
                <ListItem key={customers._id}>
                  <Link to={"/Customers/" + customers._id}>
                    <strong>
                      {customers.custName}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteCustomer(customers._id)} />                  
                </ListItem>                
              ))}              
            </List>
            <Link to="/NewCustomers" className="btn btn-outline-success float-right mt-4">Add Customer</Link>
            </>
          ) : (      
            <h3>No Results to Display</h3>
          )}            
        </div>
      </Row>
    </Container>
  );
}

export default Customers;