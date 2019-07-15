import React, {Component} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

class CreateEmployee extends Component {
    constructor(props){
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
      event.preventDefault();
      this.props.onAddEmployee(
        this.nameInput.value, 
        this.emailInput.value, 
        this.roleVal.value, 
        this.teamVal.value,
        this.addressInput.value
        );
    }

    state = {
        on: false,
    };

    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };
  
  render() {
    const { render }  = this.props;
    return (
        <div className="formBlock">
          {render({
              on: this.state.on,
              toggle: this.toggle,
          })}

          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control as="select" ref={(input) => this.profileimgVal = input}>
                <option>Please select a profile image</option>
                <option>Sample image 1</option>
                <option>Sample image 2</option>
                <option>Sample image 3</option>
                <option>Sample image 4</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter Name" ref={nameInput => this.nameInput = nameInput} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailInput => this.emailInput = emailInput} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" ref={(input) => this.roleVal = input} >
                <option >Please select a role</option>
                <option >Admin</option>
                <option >Employee</option>
              </Form.Control>
            </Form.Group>
      
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Team</Form.Label>
              <Form.Control as="select" ref={(input) => this.teamVal = input}>
                <option>Please select a team</option>
                <option>Creative</option>
                <option>Management</option>
                <option>Finance & Admin</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Add address" ref={addressInput => this.addressInput = addressInput}/>
            </Form.Group>

            <Button className="form-control" variant="success" type="submit">
              ADD EMPLOYEE
            </Button>
          </Form>

        </div>

    )
  }
}


export default CreateEmployee;