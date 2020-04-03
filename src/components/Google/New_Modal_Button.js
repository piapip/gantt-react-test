import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    addJob,
    // jobList
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  let state = {
    taskID : "", 
    taskName : "", start : "", end : "", duration : 0, completion : "", dependencies: ""
  }

  // function turnDaysToMilisecond(days) {
  //   return parseInt(days) * 1 * 24 * 60 * 60 * 1000
  // } 

  function add() {
    addJob(
      state.taskID, state.taskName, 
      new Date(state.start), new Date(state.end), state.duration, 
      state.completion, state.dependencies)
    toggle()
  }
  
  function updateInput(e) {
    state[e.target.name] = e.target.value
  }

  function updateDependenciesInput(e) {
    let options = e.target.options
    let value = ""
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        if(i !== 0) value = value + ","
        value = value + options[i].value
      }
    }
    state.dependencies = value
  }

  // function insertDependencies() {
  //   jobList.map((job) => {
  //     console.log(job)
  //     return (
  //       // <option>#{index}: {job[0]}</option>
  //       <option>{job[0]}</option>
  //     )
  //   })
  // }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
            <Label sm={3}>Task ID</Label>
              <Col sm={9}><Input type="text" name="taskID" id="taskID" onChange={updateInput}></Input></Col>
            </FormGroup>
            <FormGroup row>
            <Label sm={3}>Task Name</Label>
              <Col sm={9}><Input type="text" name="taskName" id="taskName" onChange={updateInput}></Input></Col>
            </FormGroup>
            <FormGroup row>
            <Label sm={3}>Starting date</Label>
            < Col sm={9}><Input type="date" name="start" id="Starting date" onChange={updateInput}></Input></Col>
            </FormGroup>
            <FormGroup row>
            <Label sm={3}>Ending date</Label>
              <Col sm={9}><Input type="date" name="end" id="Ending date" onChange={updateInput}></Input></Col>
            </FormGroup>
            <FormGroup row>
            <Label sm={3}>Duration</Label>
              <Col sm={9}><Input type="number" name="duration" id="Duration" onChange={updateInput}></Input></Col>
            </FormGroup>
            <FormGroup row>
            <Label sm={3}>Completion</Label>
              <Col sm={9}><Input type="number" min={0} max={100} name="completion" id="Completion" onChange={updateInput}></Input></Col>
            </FormGroup>
            <FormGroup row>
            <Label sm={3}>Dependencies</Label>
              <Col sm={9}><Input type="select" name="dependencies" id="Dependencies" onChange={updateDependenciesInput} multiple>
                <option>Research</option>
                <option>Write</option>
                <option>Cite</option>
                <option>Complete</option>
                <option>Outline</option>
              </Input></Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;