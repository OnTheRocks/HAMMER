import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";

function NewCustomers() {
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
        window.location ="/Customers"        
    }
  };

    return (
      <Container fluid>
        <Row>
          <div class="col-md-6 offset-md-3">
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
              <button id="btn btn-success" >
                  Back
              </button>
              <FormBtn
                disabled={!(formObject.custName)}
                onClick={hadndleFormSubmit}>
                  Submit Customer
              </FormBtn>
            </form>
          </div>
         </Row>
        </Container>
      );
    }

export default NewCustomers;