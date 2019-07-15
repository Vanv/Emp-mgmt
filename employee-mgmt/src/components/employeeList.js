import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';



class EmployeeList extends Component {
  render() {
    // console.log(this.props);
    const {profileimg, name, role, team} = this.props;
    return(
      <div>
      <section>
        <div className="container">
        <Row>

            {/* Displaying list of employess */}

            <Col lg={10} className="profileBlock">
            <Row>
              <Col sm={3}>
              <img src={profileimg} className="profile-image" alt={name} />
              </Col>
              <Col sm={8} className="textleft" onClick={empDetails}>

                <div className="profileName">{name}<br/> </div>
                {role}<br/>
                {team}<br/>
              </Col>
            </Row>
            </Col>
            <Col lg={1}>
            </Col>
          </Row>      
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

export default EmployeeList;


