import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Customers() {
  // Setting our component's initial state
  const [customers, setCustomers] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all customers and store them with setCustomers
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

  // Deletes a customer from the database with a given id, then reloads customers from the db
  function deleteCustomer(id) {
    API.deleteCustomer(id)
      .then(res => loadCustomers())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveCustomer method to save the customer data
  // Then reload customers from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.customerName) {
      API.saveCustomer({
        customerName: formObject.customerName,
        customerStreet: formObject.customerStreet,
        customerCity: formObject.customerCity,
        customerState: formObject.customerState,
        customerCity: formObject.customerZip
      })
        .then(res => loadCustomers())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Customer</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="customerName"
                placeholder="Customer Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="customerStreet"
                placeholder="Street"
              />
              <Input
                onChange={handleInputChange}
                name="customerCity"
                placeholder="City"
              />
              <Input
                onChange={handleInputChange}
                name="customerState"
                placeholder="State"
              />
              <Input
                onChange={handleInputChange}
                name="customerZip"
                placeholder="Zip"
              />
              <FormBtn
                disabled={!(formObject.customerName)}
                onClick={handleFormSubmit}
              >
                Submit Customer
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Customers</h1>
            </Jumbotron>
            {customers.length ? (
              <List>
                {customers.map(customers => (
                  <ListItem key={customers._id}>
                    <Link to={"/books/" + customers._id}>
                      <strong>
                        {customers.customerName}
                      <br></br>
                        {customers.customerStreet}
                      <br></br>
                        {customers.customerCity}, {customers.customerState}
                      <br></br>
                        {customers.customerZip}
                      <br></br>
                        {customers._id}
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
