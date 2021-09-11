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
      <Row>
        <div className="col-4" style={{ border: 'double 5px black', borderStyle: 'double', backgroundColor: 'antiquewhite', textAlign: 'center'}}>
          <strong>{juice.name}</strong>
          <br></br>Brand: {juice.brand}
          <br></br>Flavor: {juice.flavor}
          <br></br>Price Per Liter: ${juice.price}
          <br></br>Stock: {juice.quantity} Units
          <br></br>{quantityWarning}
          <br></br>
          <button onClick={props.onClickingEdit}>Update</button>  <button onClick={()=> onClickingDelete(juice.id)}>Delete</ button>
        </div>
      </Row>
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