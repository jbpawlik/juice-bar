import React from "react";
import PropTypes from "prop-types";
import NumericInput from "react-numeric-input";

function JuiceForm(props) {
  return (
    <React.Fragment>
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
        {/* <div className="input-group plus-minus-input">
          <div className="input-group-button">
            <button type="button" className="button hollow circle" data-quantity="minus" data-field="quantity">
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          </div>
          <input className="input-group-field" type="number" name="quantity" value="0"></input>
          <div className="input-group-button">
            <button type="button" className="button hollow circle" data-quantity="plus" data-field="quantity">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div> */}
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

JuiceForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default JuiceForm;