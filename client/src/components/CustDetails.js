import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function CustDetails(props) {
  const [customers, setCustomers] = useState({})

  // When this component mounts, grab the customer with the _id of props.match.params.id
  // e.g. localhost:3000/customers/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getCustomer(id)
      .then(res => setCustomers(res.data))
      .catch(err => console.log(err));
  })

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              <strong>
                      Should list customer name here:
                      {customers.customerName}
                    
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
                {customers.customerName}
                Something should go here.
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

  export default CustDetails
