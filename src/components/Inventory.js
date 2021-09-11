import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";
import {Row, Container, Col, Card} from 'react-bootstrap'

function Inventory(props) {
  return (
    <React.Fragment>
      <Container>
        <Row style={{height: '20%', padding: '1em' }}>
          {props.inventory.map((juice) =>
          <Col sm='3' style={{padding: '1em', minHeight: '100%', backgroundColor: 'white', border: "solid 2px black", textAlign: 'center', margin: '4%',  justifyContent: 'space-evenly'}}>
              <Juice
                whenJuiceClicked = {props.onJuiceSelection}
                name={juice.name}
                brand={juice.brand}
                price={juice.price}
                flavor={juice.flavor}
                quantity={juice.quantity}
                id={juice.id}
                key={juice.id}
              />
              </Col>
          )}
          <br></br>
        </Row>
      </Container>
    </React.Fragment>
  )
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onJuiceSelection: PropTypes.func
}

export default Inventory;