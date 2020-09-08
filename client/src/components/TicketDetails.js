import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [ticket, setTicket] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/tickets/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getTicket(id)
      .then(res => setTicket(res.data))
      .catch(err => console.log(err));
  },)

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>
                  Ticket Number - {ticket.TicketNum}
                </strong>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1><strong>{ticket.TicketCustName}</strong></h1>
              <p>              
               Date - {ticket.TicketDate}
               <br></br>
               Ticket # - {ticket.TicketNum}
               <br></br>
               <br></br>
               <strong>Billing Address:</strong> 
               <br></br>
               {ticket.TicketBillingStreet}
               <br></br>
               {ticket.TicketBillingCity}, {ticket.TicketBillingState} {ticket.TicketBillingZip}
               <br></br>          
               <br></br>          
               <strong>Delivery Details:</strong>
               <br></br>
               Material - {ticket.TicketDescription}
               <br></br>
               Tare Weight  - {ticket.TicketTare}
               <br></br>
               Gross Weight - {ticket.TicketGross}
               <br></br>
               Net Weight   - {ticket.TicketNet}
               
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/Tickets">← Back to Tickets</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
