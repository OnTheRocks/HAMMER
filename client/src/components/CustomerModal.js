import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customerActions';
// import e from 'express';

class CustomerModal extends Component {
  state= {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
          >Add Customer</Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>Add To Customer List</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="customer"></Label>
                  <Input
                    type="text"
                    name="name"
                    id="customer"
                    placeholder="Add Customer"
                    onChange={this.onChange}
                    />
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
      </div>
    )
  }
}

export default connect()(CustomerModal);