import React from "react";
import PropTypes from "prop-types";
import {Row, Container} from 'react-bootstrap';

function JuiceInfo(props){
  let quantityWarning = 0
  if (props.quantity < 1) {
    quantityWarning = 'Out of Stock'
  } else if (props.quantity <= 10 && props.quantity >= 1) {
    quantityWarning = 'Low Stock'
  } else {
    quantityWarning = 'In Stock'
  }
  const {juice, onClickingDelete } = props;
  return (
    <React.Fragment>
      <Container>
      {/* <Row> */}
        <div className="" style={{ border: 'solid 2px black', backgroundColor: 'white', textAlign: 'center'}}>
          <strong>{juice.name}</strong>
          <br/>Brand: {juice.brand}
          <br/>Flavor: {juice.flavor}
          <br/>Price Per Liter: ${juice.price}
          <br/>Stock: {juice.quantity} Units
          <br/>{quantityWarning}
          <br/>
          <button onClick={props.onClickingEdit}>Update</button>  <button onClick={()=> onClickingDelete(juice.id)}>Delete</ button>
        </div>
      {/* </Row> */}
      </Container>
    </React.Fragment>
  );
}

JuiceInfo.propTypes = {
  juice: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default JuiceInfo;