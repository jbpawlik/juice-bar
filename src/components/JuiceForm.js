import React from "react";
import PropTypes from "prop-types";
import NumericInput from "react-numeric-input";
import {Container, Row, Col} from 'react-bootstrap';

function JuiceForm(props) {
  return (
    <React.Fragment>
      <Container >
        <Row>
          <Col sm={2} style={{display: 'block', flex: 'inline-flex'}}>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='Name' 
            required />
            <br></br>
          <input
            type='text'
            name='brand'
            placeholder='Brand'
            required />
            <br></br>
          <input
          type='string'
          name='price'
          placeholder='Price'
          required />
          <br></br>
          <input
            type='text'
            name='flavor'
            placeholder='Flavor'
            minimum='0'
            required />
            <br></br>
          {/* <input
          type='number'
          name='quantity'
          placeholder='Quantity'/> */}
          <NumericInput mobile className='quantity form-control' name='quantity' min={ 0 }
    max={ 999 }  type='Number'/>
          <button type='submit'>Add</button>
        </form>
        </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

JuiceForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default JuiceForm;