import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addDriver } from '../actions/driverActions';


class DriverModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      return (
        <div>
          <Button color="success" style={{marginBottom: '2rem'}} onClick={this.toggle}>Add Driver</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>Add Drivers</ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for="driver">Driver</Label>
                      <Input type="text" name="name" id="driver" placeholder="Add Driver" onChange={this.onChange}></Input>
                    </FormGroup>
                  </Form>
                </ModalBody>
            </Modal>
        </div>
      )
    }
  }


export default connect()(DriverModal);