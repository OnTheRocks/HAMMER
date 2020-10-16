import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";

function CustomerDetails(props) {
  const [customers, setCustomers] = useState({})
  const [locations, setLocations] = useState({})

  // When this component mounts, grab the customer with the _id of props.match.params.id
  // e.g. localhost:3000/Customers/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getCustomer(id)
      .then(res => setCustomers(res.data))      
      .catch(err => console.log(err));
  }, [id])

  useEffect(() => {
    API.getCustLocations(id)
      .then(res => setLocations(res.data))
      .catch(err => console.log(err));      
  }, [id])



  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
            <strong>
              {customers.custName}                      
            </strong>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Customer Details</h1>
            <p>
              <strong>{customers.custName}</strong>
                  <br></br>
                {customers.custStreet} 
                  <br></br>
                {customers.custCity} 
                  <br></br>
                {customers.custState} 
                  <br></br>
                {customers.custZip} 
                  <br></br>
                {customers.locations} 
                  <br></br>
                {locations.locations} 
                  <br></br>                  
                {customers._id}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/Customers">← Back to Customers</Link>
        </Col>
      </Row>
    </Container>
  );
}
export default CustomerDetails