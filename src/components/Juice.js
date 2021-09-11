import React from "react";
import PropTypes from "prop-types";
import {Container, Row, Col} from "react-bootstrap";


function Juice(props) {
  let quantityWarning = 0
  console.log(props.quantity)
  if (props.quantity < 1) {
    quantityWarning = 'Out of Stock'
  } else if (props.quantity <= 10 && props.quantity >= 1) {
    quantityWarning = 'Low Stock'
  } else {
    quantityWarning = 'In Stock'
  }
  
  return (
    <React.Fragment>
      <Container>
      {/* <Row> */}
        <div style={{}}>
          <div onClick = {() => props.whenJuiceClicked(props.id)}>
          <strong>{props.name}</strong>
          <br></br>Brand:  {props.brand}
          <br></br>Flavor:  {props.flavor}
          <br></br>Price Per Liter:  ${props.price}
          <br></br>Stock:  {props.quantity} Units
          <br></br>{quantityWarning}
          </div>
        </div>
        {/* </Row> */}
      </Container>
    </React.Fragment>
  )
}

Juice.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  whenJuiceClicked: PropTypes.func
}

export default Juice;