import React from 'react'
import Table from 'react-bootstrap/Table'

function LegalEntities(){
    return(
        <div style={{textAlign: 'center'}}>
            <div>
      <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Company name</th>
      <th>Phone Number</th>
      <th>City</th>
      <th>Company Type</th>
      <th>CEO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
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
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
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

export default LegalEntities