import React from 'react';
import { Table} from 'react-bootstrap';


const SelectedPeople = () => {
    return(
        <div className="container">
            <div className="py-4">
            <p class="text-secondary"> <h1>This text represents danger. </h1></p>
                
  
                
                
               

                <Table striped bordered hover variant="white"  style={{width:"110%"}}>
  <thead>
    <tr>
      <th>Roll_no</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the Bird</td>
      <td >Anjio lara</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
                
                
                    
               
            </div>
        </div>
    );
};

export default SelectedPeople;
 