import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewJuice(props) {

  function handleNewJuiceSubmission(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewJuiceSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
        type='number'
        name='price'
        placeholder='Price' />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  )
}

export default NewJuice;