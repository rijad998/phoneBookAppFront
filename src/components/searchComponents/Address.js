import React from 'react'
import Table from 'react-bootstrap/Table'

function Address(){
    return(
        <div style={{textAlign: 'center'}}>
            <div>
      <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Address</th>
      <th>Person/Company</th>
      <th>Phone Number</th>
      <th>Type of user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      
    </tr>
  </tbody>
</Table>
      </div>
        </div>
    );
}

export default Address