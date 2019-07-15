import React, { Component } from 'react';
import './App.css';
import Employees from './components/employees';
import CreateEmployee from './components/CreateEmployee';
import EmployeeDetail from './components/employeeDetail';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import jack from './assets/jack.png';
import victoria from './assets/victoria.png';
import donna from './assets/donna.png';
import mary from './assets/mary.png';
import andy from './assets/andy.png';
import Header from "./components/header";
import createEmployee from './components/CreateEmployee';



library.add(faIgloo, faEdit, faTrash)

// Employee details
const employees = [
  {
    id: 1,
    profileimg: jack,
    name: "Micheal Douglas",
    role: "Admin",
    team: "Creative"
  },
  {
    id: 2,
    profileimg: victoria,
    name: "Victoria Ferguson",
    role: "Admin",
    team: "Management"
  },
  {
    id: 3,
    profileimg: donna,
    name: "Donna Hicks",
    role: "Admin",
    team: "Creative"
  },
  {
    id: 4,
    profileimg: mary,
    name: "Mary Long",
    role: "Employee",
    team: "Finance & Admin"
  },
  {
    id: 5,
    profileimg: andy,
    name: "Andy Mann",
    role: "Employee",
    team: "Finance & Admin"
  }
];

localStorage.setItem('employees', JSON.stringify(employees));


class App extends Component {
  constructor(){
    super();
    this.state = {
      employees: JSON.parse(localStorage.getItem('employees'))
    };
    
    this.onAddEmployee = this.onAddEmployee.bind(this);
    
  }
  componentWillMount() {
    const employees = this.getEmployees();

    this.setState({employees});
    
  }
  // Get all the Employees
  getEmployees() {
    return this.state.employees;
    // console.log("from json", employees);
    // this.setState({employees});
  }  

  // Create new employee method
  onAddEmployee(name, email, role,team, address) {
    console.log(name, email, role, team, address);
    
    const employees = this.getEmployees();

    employees.push({
      name, 
      email,
      role,
      team,
      address
    });
    this.setState({employees});
  }
  render() {
    return (
      <div className="App">
        <Container className="wrapper">
          <Header />
         
  
            <Row>
                <Col sm={6}>
                <Row>
                <Col lg={10}>
                <form className="form" id="addItemForm">
                    <input
                      type="text"
                      className="input form-control"
                      id="addInput"
                      placeholder="Search:"
                    />

                  </form>

                  <div className="listEmployees">
                    <Row className="sort">
                      <Col sm={6}>
                        <h4>Admin</h4>
                      </Col>
                      <Col sm={6}>
                        {/* <h4>Sort by: </h4> */}
                        
                      </Col>  
                    </Row>

                  </div>
                </Col>
                </Row>
                  <Employees 
                    employees={this.state.employees} 
                  />  
                </Col>
                <Col sm={6}>
                <CreateEmployee render={ ({on, toggle}) => (
                  <div>
                    {/* <Button onClick={toggle} className="new-employee-btn" variant="dark">CREATE A NEW EMPLOYEE</Button> */}

                    {on && <h6>Form</h6> }
                  </div>
                )} onAddEmployee={this.onAddEmployee}/>


                   {/* <EmployeeDetail employees={employees} />  */}
                   {/* <Button className="new-employee-btn" variant="dark">CREATE A NEW EMPLOYEE</Button> */}
                  {/* <CreateEmployee 
                    onAddEmployee={this.onAddEmployee}
                    
                  /> */}
                  
                </Col>
            </Row>
            {/* <Row>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
            </Row> */}
      </Container>
      </div>
    );
  }
}


// Add a New Employee Form
const newEmployeeForm = () => {
  return (
    <Form className="formBlock">

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>Please select a profile image</option>
      <option>Sample image 1</option>
      <option>Sample image 2</option>
      <option>Sample image 3</option>
      <option>Sample image 4</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Enter Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Role</Form.Label>
    <Form.Control as="select">
      <option>Please select a role</option>
      <option>Admin</option>
      <option>Employee</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Team</Form.Label>
    <Form.Control as="select">
      <option>Please select a team</option>
      <option>Creative</option>
      <option>Management</option>
      <option>Finance & Admin</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Add address" />
  </Form.Group>
  <Button className="form-control" variant="success" type="submit">
    ADD EMPLOYEE
  </Button>
</Form>
  );
}



export default App;
