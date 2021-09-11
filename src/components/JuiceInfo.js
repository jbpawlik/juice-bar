import React from "react";
import PropTypes from "prop-types";
import {Container} from 'react-bootstrap';

function JuiceInfo(props){
  const {juice, onClickingDelete } = props;
  let quantityWarning = 0
  if (juice.quantity < 1) {
    quantityWarning = 'Out of Stock'
  } else if (juice.quantity <= 10 && juice.quantity >= 1) {
    quantityWarning = 'Low Stock'
  } else {
    quantityWarning = 'In Stock'
  }
  return (
    <React.Fragment>
      <Container style={{padding:'5em', minHeight: '20em'}}>
        <div style={{ border: 'solid 2px black', backgroundColor: 'white', textAlign: 'center', padding: '1em'}}>
          <strong>{juice.name}</strong>
          <br/>Brand: {juice.brand}
          <br/>Flavor: {juice.flavor}
          <br/>Price Per Liter: ${juice.price}
          <br/>Stock: {juice.quantity} Units
          <br/><em>{quantityWarning}</em>
          <br/>
          <button onClick={props.onClickingSell}>Sell Liter</button>  <button onClick={props.onClickingEdit}>Update</button>  <button onClick={()=> onClickingDelete(juice.id)}>Delete</ button>
        </div>
      </Container>
    </React.Fragment>
  );
}

JuiceInfo.propTypes = {
  juice: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
}

export default JuiceInfo;