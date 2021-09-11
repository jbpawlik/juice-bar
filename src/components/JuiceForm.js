import React from "react";
import PropTypes from "prop-types";
import NumericInput from "react-numeric-input";
import {Container, Row, Col} from 'react-bootstrap';

function JuiceForm(props) {
  return (
    <React.Fragment>
      <Container>
        <div style={{padding: '5%', maxHeight: '100%', backgroundColor: 'white', marginTop: 
      '20%', border: "solid 2px black"}}>
        <form onSubmit={props.formSubmissionHandler}>
          <p style={{textAlign: 'center'}}>Edit</p>
          <input style={{width: '100%', border: "solid 2px black"}}
            type='text'
            name='name'
            placeholder='Name' 
            required />
            <br/><br/>
          <input style={{width: '100%', border: "solid 2px black"}}
            type='text'
            name='brand'
            placeholder='Brand'
            required />
            <br/><br/>
          <input style={{width: '100%', border: "solid 2px black"}}
          type='string'
          name='price'
          placeholder='Price'
          required />
          <br/><br/>
          <input style={{width: '100%', border: "solid 2px black"}}
            type='text'
            name='flavor'
            placeholder='Flavor'
            minimum='0'
            required />
          <br/><br/>
          <NumericInput mobile className='quantity form-control' name='quantity' min={ 0 }
    max={ 999 }  type='Number' placeholder="quantity" />
          <br/><br/>
          <button type='submit'>Add</button>
        </form>
        </div>
      </Container>
    </React.Fragment>
  );
}

JuiceForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default JuiceForm;