import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";

function Customers() {
  //  Setting initial state
  const [customers, setCustomers] = useState([])
  const [formObject, setFormObject] = useState({})

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

  // Handles updating component state when user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveCustomer method to save the data
  // Then reload Cutomers from the database
  function hadndleFormSubmit(event) {
    event.preventDefault();
    if (formObject.custName) {
      API.saveCustomer({
        custName: formObject.custName,
        custStreet: formObject.custStreet,
        custCity: formObject.custCity,
        custState: formObject.custState,
        custZip: formObject.custZip
      })
        .then(res => loadCustomers())
        .catch(err => console.log(err));
        document.getElementById("custFrm").reset();
        setFormObject({})        
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Customer</h1>
            </Jumbotron>
            <form id="custFrm">
              <Input 
                onChange={handleInputChange} 
                name="custName" 
                placeholder="Customer Name (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="custStreet"
                placeholder="Street Address"
              />
              <Input
                onChange={handleInputChange}
                name="custCity"
                placeholder="City"
              />
              <Input
                onChange={handleInputChange}
                name="custState"
                placeholder="State"
              />
              <Input
                onChange={handleInputChange}
                name="custZip"
                placeholder="Zip Code"
              />
              <FormBtn
                disabled={!(formObject.custName)}
                onClick={hadndleFormSubmit}
                >
                  Submit Customer
                </FormBtn>
            </form>
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