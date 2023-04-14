import React from "react";

import "./App.css";
import { Container, Navbar } from "react-bootstrap";

const App = () => {
  return (
    <>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
      </Container>

    </Navbar>
      
    </>
  );
};

export default App;
