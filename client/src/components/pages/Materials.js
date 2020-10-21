import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";

function Materials() {
  //  Setting initial state
  const [materials, setMaterials] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Materials and store them with setMaterial
  useEffect(() => {
    loadMaterials()
  }, [])

  // Loads all materials and sets them to materials
  function loadMaterials() {
    API.getMaterials()
    .then(res =>
      setMaterials(res.data)
    )
    .catch(err => console.log(err));
  };

  // Deletes a Material from the database with a fiven id, then reloads Materials
  function deleteMaterial(id) {
    API.deleteMaterial(id)
      .then(res => loadMaterials())
      .catch(err => console.log(err));
  }

  // Handles updating component state when user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveMaterial method to save the data
  // Then reload Materials from the database
  function hadndleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name) {
      API.saveMaterial({
        name: formObject.name,
        price: formObject.price,
        notes: formObject.notes
      })
        .then(res => loadMaterials())
        .catch(err => console.log(err));
        document.getElementById("matFrm").reset();
        setFormObject({}) 
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Materials</h1>
            </Jumbotron>
            <form id="matFrm">
              <Input 
                onChange={handleInputChange} 
                name="name" 
                placeholder="Material Name (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="price"
                placeholder="Price"
              />
              <Input
                onChange={handleInputChange}
                name="notes"
                placeholder="Notes"
              />
              <FormBtn
                disabled={!(formObject.name)}
                onClick={hadndleFormSubmit}
                >
                  Submit Material
                </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-2">
            <Jumbotron>
              <h1>Materials</h1>
            </Jumbotron>
              {materials.length ? (
                <List>
                  {materials.map(materials => (      
                    <ListItem key={materials._id}>
                      <Link to={"/Materials/" + materials._id}>
                        <strong>
                          {materials.name}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => deleteMaterial(materials._id)} />
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

export default Materials;