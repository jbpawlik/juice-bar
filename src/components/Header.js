import React from "react";
import { Container } from 'react-bootstrap'

function Header() {
  return (
    <React.Fragment>
      <Container>
        <div className="row" style={{margin: '50px', marginLeft: '10%', minWidth: '100%' }}>
        <h1><img src="hummingbird.png" alt='Hummingbird' height="100px"></img><img src="hummingbird1.jfif" width='100' alt='Hummingbird'></img>
        </h1>
        </div>
      </Container>
    </React.Fragment>
  )
}


export default Header;