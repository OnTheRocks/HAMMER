import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";

function MatDetails(props) {
  const [materials, setMaterials] = useState({})

  // When this component mounts, grab the customer with the _id of props.match.params.id
  // e.g. localhost:3000/Materials/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getMaterial(id)
      .then(res => setMaterials(res.data))
      .catch(err => console.log(err));
  }, [id])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
            <strong>
              {materials.name}                      
            </strong>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Material Details</h1>
            <p>
              <strong>
              {materials.name}
              </strong>
              <br></br>
                {materials.price}
              <br></br>
                {materials.notes}
              <br></br>
                {materials._id}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/Materials">← Back to Materials</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MatDetails