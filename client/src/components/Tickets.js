import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, DropDown, FormBtn } from "../components/Form";

function Tickets() {
  // Setting our component's initial state
  const [tickets, setTickets] = useState([])
  const [formObject, setFormObject] = useState({})

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
    if (formObject.TicketDate) {
      API.saveTicket({
        TicketNum: formObject.TicketNum,
        TicketDate: formObject.TicketDate,
        TicketCustName: formObject.TicketCustName,
        TicketBillingStreet: formObject.TicketBillingStreet,
        TicketBillingCity: formObject.TicketBillingCity,
        TicketBillingState: formObject.TicketBillingState,
        TicketBillingZip: formObject.TicketBillingZip,
        TicketQuan: formObject.TicketQuan,
        TicketDescription: formObject.TicketDescription,
        TicketTare: formObject.TicketTare,
        TicketGross: formObject.TicketGross,
        TicketNet: formObject.TicketGross - formObject.TicketTare
      })
        .then(res => loadTickets())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Add Ticket</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="TicketDate"
              placeholder="Date"
            />
            <Input
              onChange={handleInputChange}
              name="TicketNum"
              placeholder="Ticket Number (required)"
            />
            <Input
              onChange={handleInputChange}
              name="TicketCustName"
              placeholder="Name"
            />
            {/* <DropDown
              onChange={handleInputChange}
              name="TicketCustName"
              data={tickets.TicketCustName}
              placeholder="Customer"
            /> */}
            <Input
              onChange={handleInputChange}
              name="TicketBillingStreet"
              placeholder="Street"
            />
            <Input
              onChange={handleInputChange}
              name="TicketBillingCity"
              placeholder="City"
            />
            <Input
              onChange={handleInputChange}
              name="TicketBillingState"
              placeholder="State"
            />
            <Input
              onChange={handleInputChange}
              name="TicketBillingZip"
              placeholder="Zip"
            />
            <Input
              onChange={handleInputChange}
              name="TicketDescription"
              placeholder="Description"
            />
            <Input
              onChange={handleInputChange}
              name="TicketQuan"
              placeholder="Quantity"
            /> 
            <Input
              onChange={handleInputChange}
              name="TicketTare"
              placeholder="Tare Weight"
            />
            <Input
              onChange={handleInputChange}
              name="TicketGross"
              placeholder="Gross Weight"
            />
           
            <FormBtn
              disabled={!(formObject.TicketNum)}
              onClick={handleFormSubmit}
            >
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
                        {tickets.TicketNum} -- {tickets.TicketCustName} -- Net Weight = {tickets.TicketNet}
                      {/* <br></br>
                        {customers.customerStreet}
                      <br></br>
                        {customers.customerCity}, {customers.customerState}
                      <br></br>
                        {customers.customerZip}
                      <br></br>
                        {customers._id} */}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteTicket(tickets._id)} />
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