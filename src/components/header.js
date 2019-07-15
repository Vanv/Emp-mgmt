import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../assets/affinityid-logo.svg';
import { Button } from 'react-bootstrap';
// import Newemployee from './new-employee';

class Header extends Component {

    render() {
        // const { on, toggle } = this.props;
        return(
            <Row>
                <Col sm={5}>
                    {/* <img src={logo} className="id-logo" alt="logo" /> */}
                    <h2>EMPLOYEE MANAGEMENT</h2>
                </Col>
                <Col sm={1}>
                </Col>
                <Col sm={6}>
                    <Button onClick={this.props.toggle} className="new-employee-btn" variant="dark">CREATE A NEW EMPLOYEE</Button>
                    {/* <Button onClick={this.toggle} className="new-employee-btn" variant="dark">show - CREATE A NEW EMPLOYEE</Button> */}
                    {/* <Button type="button" onClick={this.props.toggle}>
                       show/hide
                    </Button> */}
                </Col>
            </Row>
        )
    }
}

export default Header;