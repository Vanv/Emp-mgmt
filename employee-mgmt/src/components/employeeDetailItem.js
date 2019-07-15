import React, {Component} from 'react';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';



class EmployeeDetailItem extends Component {
  constructor(){
    super();
   
  }

  render() {
    console.log("test ", this.props);
    return(
      <div>
      <section>
        <div className="container">
        <Row>
          
            <Col lg={10} className="profileBlock">
            <Row>
            <Col sm={3}>
            {/* <img src={this.props.employee.profileimg} className="profile-image" alt={this.props.employee.name} /> */}
            </Col>
            <Col sm={8} className="textleft" onClick={empDetails}>

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

const empDetails = (props) => {
  return( 
    <div className="profileName">
    <h2>emp details funciton</h2>
      
     </div>
              
  );
}

export default EmployeeDetailItem;


