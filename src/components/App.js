import React from 'react';
import Header from './Header';
import JuiceControl from './JuiceControl';
import {Row} from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
        <Row>
            <JuiceControl />
        </Row>
      </div>
    </React.Fragment>
  );
}

export default App;
