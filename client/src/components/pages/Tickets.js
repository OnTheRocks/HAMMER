import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";

const moment = require('moment');

function Tickets(props) {
  // Setting our component's initial state
  const [tickets, setTickets] = useState([])
  const [formObject, setFormObject] = useState({})
  const [customers, setCustomers] = useState([])

  console.log("Customer = ", customers)

  // Load all tickets and store them with setTickets
  useEffect(() => {
    loadTickets()
  }, [])

  // Loads all tickets and sets them to tickets
  function loadTickets() {
    API.getTickets()
      .then(res => 
        setTickets(res.data)
      )
      .catch(err => console.log(err));
  };  

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

  // Deletes a ticket from the database with a given id, then reloads tickets from the db
  function deleteTicket(id) {
    API.deleteTicket(id)
      .then(res => loadTickets())
      .catch(err => console.log(err));
  }

 // Handles updating component state when the user types into the input field
 function handleInputChange(event) {
   const { name, value } = event.target;
   setFormObject({...formObject, [name]: value})
 };

 // When the form is submitted, use the API.saveTicket method to save the ticket data
// Then reload tickets from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.ticketDate) {
      API.saveTicket({
        ticketDate: formObject.ticketDate,
        ticketNum: formObject.ticketNum,
        ticketCust: formObject.ticketCust,
        ticketCustStreet: formObject.ticketCustStreet
      })
        .then(res => loadTickets())
        .catch(err => console.log(err));
        document.getElementById("ticketFrm").reset();  
        setFormObject({})      
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Add Ticket</h1>
          </Jumbotron>
          <form id="ticketFrm">
            <Input
              onChange={handleInputChange}
              name="ticketDate"
              placeholder="Date"
            />
            <Input
              onChange={handleInputChange}
              name="ticketNum"
              placeholder="Ticket Number (required)"
            />          
            <select onChange={handleInputChange}
              name="ticketCust"
              placeholder= "Customer Name"
              style={{width: '100%', height: 35, marginBottom: 15}}>
              {customers.map((customers, id) => (
               <> 
               <option value="" key={id} hidden>Select Customer</option>
               <option default="Customer" key={customers._id}>{customers.custName}</option>  
              </>   
              ))}
            </select>
            <Input
              onChange={handleInputChange}
              name="ticketCustStreet"
              placeholder="Street"
            /> 
            <Input
              onChange={handleInputChange}
              name="ticketCustCity"
              placeholder="City"
            /> 
            <Input
              onChange={handleInputChange}
              name="ticketCustState"
              placeholder="State"
            /> 
            <Input
              onChange={handleInputChange}
              name="ticketCustZip"
              placeholder="Zip"
            /> 
            <Input
              onChange={handleInputChange}
              name="ticketCustMaterial"
              placeholder="Material"
            /> 
            <FormBtn
              disabled={!(formObject.ticketNum)}
              onClick={handleFormSubmit}>
              Submit Ticket
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Tickets</h1>
            </Jumbotron>
            {tickets.length ? (
              <List>
                {tickets.map(tickets => (
                  <ListItem key={tickets._id}>
                    <Link to={"/Tickets/" + tickets._id}>
                      <strong>
                      Ticket Date - {moment(tickets.ticketDate).format("MM-DD-YYYY")}
                        <br></br>
                      Ticket# - {tickets.ticketNum}
                      <br></br>
                      {tickets.ticketCust}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteTicket(tickets._id)}/>
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

export default Tickets;