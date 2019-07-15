import React, {Component} from 'react';
import EmployeeList from './employeeList';


class Employees extends Component {
    render() {

    let employeeList;

     if(this.props.employees) {
       employeeList = this.props.employees.map(employee => {
         return(
          <EmployeeList key={employee.name} {...employee} />

         );
       });
     }

    return (
        <div>
   
          {employeeList}
        </div>

    )
  }
}

export default Employees;
