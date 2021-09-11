import React from 'react';
import Header from './Header';
import JuiceControl from './JuiceControl';
import {Row, Container, Col} from "react-bootstrap";
import Sidebar from './Sidebar'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="2">
          </Col>
          <Col sm="10">
            <Header/>
          </Col>
        <Row>
        <Col sm="2">
            <Sidebar/>
          </Col>
          <Col sm="10">
            <JuiceControl/>
          </Col>
        </Row>  
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
