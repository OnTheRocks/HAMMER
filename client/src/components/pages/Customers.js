import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
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
      <Col size="md-6">
        <Jumbotron>
        <Link to="/NewCustomers"><h1>Add Customer</h1></Link>
        </Jumbotron>
        
      </Col>
      <Col size="md-6 sm-2">
        <Jumbotron>
          <h1>Customers</h1>
        </Jumbotron>
          {customers.length ? (
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
          ) : (      
            <h3>No Results to Display</h3>
          )}            
        </Col>
      </Row>
    </Container>
  );
}

export default Customers;