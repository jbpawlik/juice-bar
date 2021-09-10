import React from "react";
import PropTypes from "prop-types";

function Juice(props) {
  return (
    <React.Fragment>
      <p>{props.name}
      {props.brand}
      {props.price}
      {props.flavor}</p>
    </React.Fragment>
  )
}

Juice.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired
}

export default Juice;