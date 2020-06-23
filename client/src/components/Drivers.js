import React, { Component } from 'react';
import { Container, ListGroup, Button, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getDrivers, deleteDriver } from '../actions/driverActions';
import PropTypes from 'prop-types';

class Drivers extends Component {

  componentDidMount() {
    this.props.getDrivers();
  }
  
  onDeleteClick = (id) => {
    this.props.deleteDriver(id);
  };

  render() {
    const { drivers } = this.props.driver;
    return(
      <Container>

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
                    onClick={this.onDeleteClick.bind(this, id)}
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

export default connect(mapStateToProps, { getDrivers, deleteDriver })(Drivers);