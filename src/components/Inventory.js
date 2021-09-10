import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
    {props.inventory.map((juice) =>
          <Juice name={juice.name}
            brand={juice.brand}
            price={juice.price}
            flavor={juice.flavor}
            id={juice.id}
            key={juice.id}/>
        )}
    </React.Fragment>
  )
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onJuiceSelection: PropTypes.func
}

export default Inventory;