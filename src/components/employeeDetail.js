import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
// import Employees from './employees'; 
// import EmployeeList from './employeeList';

class EmployeeDetail extends Component {
    // constructor(){
    //     super();
    // }
  render() {
    console.log(this.props);
    return(
      <div>
      <section>
        <div className="container">
        <Row>
            <h4>Employee Details</h4>
            <Col lg={10} className="profileBlock">
            <Row>
            <Col sm={3}>
            {/* <img src={this.props.employee.profileimg} className="profile-image" alt={this.props.employee.name} /> */}
            </Col>
            <Col sm={8} className="textleft">
            

               {/* <div className="profileName">{this.props.employee.name}<br/> </div>
              {this.props.employee.role}<br/>
              {this.props.employee.team}<br/> */}
            </Col>
            </Row>
            </Col>
            <Col lg={1}>
            </Col>
          </Row>            
          <div className="row">
        
            {/* <div className="col-md-4 coachingField">
              
              Role: {this.props.employee.role}
              <div className="hourlyRate">
                Team: {this.props.employee.team}
              </div>
            </div> */}
          </div>
        </div>
      </section>
      </div>


    )
  }
}

export default EmployeeDetail;
