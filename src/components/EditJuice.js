import React from "react";
import JuiceForm from "./JuiceForm";
import PropTypes from "prop-types";

function EditJuice (props) {
  const {juice} = props;
  function handleEditJuiceSubmission(event) {
    event.preventDefault();
    props.onEditJuice({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, quantity: event.target.quantity.value, id: juice.id});
  }
  return (
    <React.Fragment>
      <JuiceForm 
        formSubmissionHandler={handleEditJuiceSubmission}
        buttonText="Update Juice" />
    </React.Fragment>
  );
}



EditJuice.propTypes = {
  juice: PropTypes.object,
  onEditJuice: PropTypes.func
}

export default EditJuice;