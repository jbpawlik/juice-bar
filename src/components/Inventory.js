// import React from "react";
// import Juice from "./Juice";
// import PropTypes from "prop-types";

// function Inventory(props) {
//     <React.Fragment>
//       {props.inventory.map((juice) =>
//           <Juice
//           whenJuiceClicked = {props.onJuiceSelection}
//           name={juice.name}
//             brand={juice.brand}
//             price={juice.price}
//             flavor={juice.flavor}
//             quantity={juice.quantity}
//             id={juice.id}
//             key={juice.id}/>
//         )}
//     </React.Fragment>
// }

// Inventory.propTypes = {
//   inventory: PropTypes.array,
//   onJuiceSelection: PropTypes.func
// }

// export default Inventory;

import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
    {props.inventory.map((juice) =>
          <Juice
          whenJuiceClicked = {props.onJuiceSelection}
          name={juice.name}
            brand={juice.brand}
            price={juice.price}
            flavor={juice.flavor}
            quantity={juice.quantity}
            id={juice.id}
            key={juice.id}/>
        )}
        </div>
        </div>
        <br></br>
        </div>
    </React.Fragment>
  )
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onJuiceSelection: PropTypes.func
}

export default Inventory;