import React, { Component } from 'react';
import { Container, ListGroup, Button, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid }from 'uuid';
import { connect } from 'react-redux';
import { getDrivers } from '../actions/driverActions';
import PropTypes from 'prop-types';

class Drivers extends Component {

  componentDidMount() {
    this.props.getDrivers();
  }
  
  render() {
    const { drivers } = this.props.driver;
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
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    style={{marginRight: '.5rem'}}
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        drivers: state.drivers.filter(driver => driver.id !== id)
                      }));
                    }}
                  >&times;</Button>
                  {name} - Truck #{truckNo}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

Drivers.propTypes = {
  getDrivers: PropTypes.func.isRequired,
  driver: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  driver: state.driver
});

export default connect(mapStateToProps, { getDrivers })(Drivers);