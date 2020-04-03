import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class Modal_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isToggleOn: false
    };
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {
    return (
      <div className="UpdateButton">
        <Button onClick={this.toggle}>Update job</Button>{' '}
        <Modal isOpen={this.state.isToggleOn} toggle={this.toggle}>
          <ModalBody>
            Yo yo yo 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modal_Button;