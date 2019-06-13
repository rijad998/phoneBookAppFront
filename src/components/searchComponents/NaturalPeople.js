import React, {Component} from "react";
import Table from "react-bootstrap/Table";

class NaturalPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
          persons: []
    };
    }
    componentDidMount() {
        this.fetchData();
      }
    
      fetchData() {
        fetch("/persons")
          .then(res => res.json())
          .then(persons => this.setState({ persons }))
          .catch(error => console.log("parsing error", error));
      }

      render(){
          return(
            <div style={{ textAlign: "center" }}>
      <div>
        <Table responsive>
          <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(people => {
                return (
                <tr key={people.person_id}>
                    <td>{people.name}</td>
                    <td>{people.surname}</td>
                    <td>{people.email}</td>
                    <td>{people.phone}</td>
                    <td>{people.date_of_birth}</td>
                    <td>{people.address}</td>
                </tr>
                );
            })}
            </tbody>
        </Table>
      </div>
    </div>
    )}
    }

export default NaturalPeople;