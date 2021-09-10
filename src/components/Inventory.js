import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";
import {Row, Col, Container} from 'react-bootstrap'

function Inventory(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          
    {props.inventory.map((juice) =>
      <Col lg='2'>
        <Juice
        whenJuiceClicked = {props.onJuiceSelection}
        name={juice.name}
          brand={juice.brand}
          price={juice.price}
          flavor={juice.flavor}
          quantity={juice.quantity}
          id={juice.id}
          key={juice.id}/>
          </Col>
        )}
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