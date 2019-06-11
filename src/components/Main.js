import React from "react";

function Main() {
  return (
    <div style={{ textAlign: "center" }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="naturalPerson" title="Natural Person">
          <Sonnet />
        </Tab>
        <Tab eventKey="legalEntity" title="Legal Entity">
          <Sonnet />
        </Tab>
        <Tab eventKey="phoneNumber" title="Phone Number">
          <Sonnet />
        </Tab>
        <Tab eventKey="address" title="Address">
          <Sonnet />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Main;
