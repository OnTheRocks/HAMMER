import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv1 } from "uuid";

class CustomerList extends Component {
  state = {
    customers: [
      { id: uuidv1(), name: 'Plains Readymix'},
      { id: uuidv1(), name: 'Concrete Industries'},
      { id: uuidv1(), name: 'Garden City Ready Mix Inc.'},
      { id: uuidv1(), name: 'Lee Construction'}
      
    ]
  }

  render()  {
    const { customers } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Customer');
            if(name) {
              this.setState(state => ({
                customers: [...state.customers, { id: uuidv1(), name }]
              }));
            }
          }}  
        >Add Customer</Button>

        <ListGroup>
          <TransitionGroup className="Customer-List">
            {customers.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    style={{marginRight: '0.5rem'}}
                    onClick={() => {
                      this.setState(state => ({
                        customers: state.customers.filter(customer => customer.id !== id)
                      }));
                    }}
                    >&times;</Button>
                  {name}</ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default CustomerList;