import React from "react";
import PropTypes from "prop-types";
import {Container, Card} from "react-bootstrap";


function Juice(props) {
  let quantityWarning = 0
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
        <Card onClick = {() => props.whenJuiceClicked(props.id)}>
          <div className="card-title" style={{border: '2px solid black', borderRadius: '5px'}}><strong>{props.name}</strong></div>
          <div className="card-text">
            {props.brand} brand
            <br/>
            {props.flavor} flavor
            <br/>
            ${props.price} per liter
            <br/>
            {props.quantity} liters
            <br/>
            <em>{quantityWarning}</em>
          </div>
        </Card>
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