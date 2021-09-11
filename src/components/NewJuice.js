import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import JuiceForm from "./JuiceForm";
function NewJuice(props) {

  function handleNewJuiceSubmission(event) {
    event.preventDefault();
    props.onNewJuiceCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <div style={{maxHeight: '100em'}}>
      <JuiceForm
      formSubmissionHandler={handleNewJuiceSubmission}
      buttonText="Add New Juice" />
      </div>
    </React.Fragment>
  )
}

NewJuice.propTypes = {
  onNewJuiceCreation: PropTypes.func
};

export default NewJuice;
