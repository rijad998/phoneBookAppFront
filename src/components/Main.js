import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Address from './searchComponents/Address';
import LegalEntities from './searchComponents/LegalEntities';
import NaturalPeople from './searchComponents/NaturalPeople';
import PhoneNumber from './searchComponents/PhoneNumber';

function Main() {
  return (
    <div style={{ paddingTop: '50px', textAlign: "center" }}>
      <Tabs
        id="controlled-tab-example"
        // activeKey={this.state.key}
        // onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="naturalPerson" title="Natural Person">
          <NaturalPeople />
        </Tab>
        <Tab eventKey="legalEntity" title="Legal Entity">
          <LegalEntities />
        </Tab>
        <Tab eventKey="phoneNumber" title="Phone Number">
          <PhoneNumber />
        </Tab>
        <Tab eventKey="address" title="Address">
          <Address />
        </Tab>
        <Tab className="searchbar">
            <input className="search_input" type="text" name="" placeholder="Search..." />
            <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Main;
