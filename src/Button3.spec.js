import React, { useState } from "react";
import { mount } from "cypress-react-unit-test";

function Button(props) {
  const [text, setText] = useState("");
  function handleClick() {
    setText("INI JUGA MULAI ADA APA APA");
  }
  return <button onClick={handleClick}>{text || props.text}</button>;
}

describe("Button component", () => {
  it("it shows the expected text when clicked", () => {
    mount(<Button text="SUBSCRIBE TO BASIC" />);
    cy.contains('SUBSCRIBE TO BASIC')
      .click()
      .should('have.text', 'INI JUGA MULAI ADA APA APA')
  });
});
