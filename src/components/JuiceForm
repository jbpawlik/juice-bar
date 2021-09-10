import React from "react";
import PropTypes from "prop-types";

function JuiceForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
        type='string'
        name='price'
        placeholder='Price' />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
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