import React from "react";
import NewJuice from "./NewJuice";
import Inventory from "./Inventory";
import JuiceInfo from "./JuiceInfo";
import EditJuice from './EditJuice';

class JuiceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterInventory: [],
      selectedJuice: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedJuice != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedJuice: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewJuiceToInventory = (newJuice) => {
    const newMasterInventory = this.state.masterInventory.concat(newJuice);
    this.setState({masterInventory: newMasterInventory,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedJuice = (id) => {
    const selectedJuice = this.state.masterInventory.filter(juice => juice.id === id)[0];
    this.setState({selectedJuice: selectedJuice});
  }

  handleDeletingJuice = (id) => {
    const newMasterInventory = this.state.masterInventory.filter(juice => juice.id !== id);
    this.setState({
      masterInventory: newMasterInventory,
      selectedJuice: null
    });
  }

  handleEditingJuiceInInventory = (juiceToEdit) => {
    const editedMasterInventory = this.state.masterInventory
      .filter(juice => juice.id !== this.state.selectedJuice.id)
      .concat(juiceToEdit);
    this.setState({
        masterInventory: editedMasterInventory,
        editing: false,
        selectedJuice: null
      });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditJuice juice = {this.state.selectedJuice} onEditJuice = {this.handleEditingJuiceInInventory}/>
      buttonText = "Return to Inventory";
    } else if (this.state.selectedJuice != null) {
      currentlyVisibleState =
      <JuiceInfo 
      juice = {this.state.selectedJuice}
      onClickingDelete = {this.handleDeletingJuice}
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Inventory"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewJuice onNewJuiceCreation={this.handleAddingNewJuiceToInventory} />;
      buttonText = "Return to Inventory"
      } else {
      currentlyVisibleState = <Inventory inventory={this.state.masterInventory} onJuiceSelection={this.handleChangingSelectedJuice} />
      ;
      buttonText = "New Juice"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }


}

export default JuiceControl;