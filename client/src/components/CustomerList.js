import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect }  from 'react-redux';
import { getCustomers, deleteCustomer } from '../actions/customerActions';
import PropTypes  from 'prop-types'; 

class CustomerList extends Component {

  componentDidMount() {
    this.props.getCustomers();
  }

  onDeleteClick = (id) => {
    this.props.deleteCustomer(id);
  } 
  
  render()  {
    const { customers } = this.props.customer;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="Customer-List">
            {customers.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    style={{marginRight: '0.5rem'}}
                    onClick={this.onDeleteClick.bind(this, _id)}
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

CustomerList.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  customer: state.customer
});

export default connect(mapStateToProps, { getCustomers, deleteCustomer })(CustomerList);