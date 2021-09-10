import React from "react";
import PropTypes from "prop-types";

function Juice(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenJuiceClicked(props.id)}>
      <h4>{props.name}</h4>
      <h5><p>{props.brand}</p>
      {props.flavor}
      <p>${props.price}</p></h5>
      </div>
    </React.Fragment>
  )
}

Juice.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  whenJuiceClicked: PropTypes.func
}

export default Juice;