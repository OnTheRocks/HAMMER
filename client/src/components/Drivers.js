import React, { Component } from 'react';
import { Container, ListGroup, Button, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid }from 'uuid';

class Drivers extends Component {
  state = {
    drivers: [
      { id: uuid(), name: 'Nathan Huber', truckNo: 'N8'},
      { id: uuid(), name: 'Henry Huber', truckNo: 'H10'},
      { id: uuid(), name: 'Erick Huber', truckNo: 'H20'},
      { id: uuid(), name: 'Christopher Huber', truckNo: 'H13'},
      { id: uuid(), name: 'Rick Huber', truckNo: 'H11'},
    ]
  }

  render() {
    const { drivers } = this.state;
    return(
      <Container>
        <Button 
          color="success"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt("Enter Driver Name.");
            const truckNo = prompt("Enter Truck Number.");
            if(name && truckNo) {
              this.setState(state => ({
                drivers: [...state.drivers, { id: uuid(), name, truckNo }]
              }));
            }
          }}
          >Add Driver
        </Button>

        <ListGroup>
          <TransitionGroup className="driver-list">
            {drivers.map(({ id, name, truckNo }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
     
     
                <ListGroupItem>{name} - {truckNo}</ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default Drivers;