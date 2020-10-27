import React from "react";
import { mount } from "cypress-react-unit-test";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return { text: "MULAI ADA APA APA KAN" };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}

describe("Button component", () => {
  it("it shows the expected text when clicked", () => {
    mount(<Button text="SUBSCRIBE TO BASIC" />);
    cy.contains('SUBSCRIBE TO BASIC')
      .click()
      .should('have.text', 'MULAI ADA APA APA KAN')
  });
});
