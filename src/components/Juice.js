import React from "react";
import PropTypes from "prop-types";



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
      <div onClick = {() => props.whenJuiceClicked(props.id)}>
      <h4>Name: {props.name}</h4>
      <h5><p>Brand: {props.brand}</p>
      <p>Flavor{props.flavor}</p>
      <p>$ {props.price}</p>
      <p># {props.quantity}</p></h5>
      {quantityWarning}
      </div>
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