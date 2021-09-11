import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";
import {Row, Container, Col} from 'react-bootstrap'

function Inventory(props) {
  return (
    <React.Fragment>
      <Container>
        <Row style={{}}>
          {props.inventory.map((juice) =>
          <Col sm='4' style={{padding: '1em', minHeight: '100%', backgroundColor: 'antiquewhite', border: "solid 2px black", textAlign: 'center'}}>
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