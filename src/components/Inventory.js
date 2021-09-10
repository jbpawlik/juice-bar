import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
    {props.inventory.map((juice, index) =>
          <Juice name={juice.name}
            brand={juice.brand}
            price={juice.price}
            flavor={juice.flavor}
            key={index}/>
        )}
    </React.Fragment>
  )
}

Inventory.propTypes = {
  inventory: PropTypes.array
}

export default Inventory;