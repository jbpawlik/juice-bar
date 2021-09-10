import React from "react";
import PropTypes from "prop-types";

function JuiceInfo(props){
  let quantityWarning = ''
  if (props.quantity === 0) {
    quantityWarning = 'Out of Stock'
  } else if (props.quantity > 1 & props.quantity < 11) {
    quantityWarning = 'Low Stock'
  } else {
    quantityWarning = 'In Stock'
  }
  
  const {juice, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Juice Info</h1>
      <h2>${juice.price}
      <br></br> 
      {juice.name}
      <br></br>{juice.brand}
      <br></br>{juice.flavor}</h2>
      <h2>#{juice.quantity}liters</h2>
      {quantityWarning}
      <button onClick={props.onClickingEdit}>Update Juice</button>
      <button onClick={()=> onClickingDelete(juice.id)}>Delete Juice</ button>
      <hr/>
    </React.Fragment>
  );
}

JuiceInfo.propTypes = {
  juice: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default JuiceInfo;