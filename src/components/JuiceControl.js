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
  
  handleEditClick = () => {
    this.setState({editing: true});
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
      currentlyVisibleState = 
      <EditJuice 
      juice = {this.state.selectedJuice} 
      onEditJuice = {this.handleEditingJuiceInInventory}
      />
      buttonText = "Return to Inventory";
    } else if (this.state.selectedJuice != null) {
      currentlyVisibleState =
      <JuiceInfo 
      juice = {this.state.selectedJuice}
      onClickingDelete = {this.handleDeletingJuice}
      onClickingEdit = {this.handleEditClick}
      />
      buttonText = "Return to Inventory"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewJuice 
      onNewJuiceCreation={this.handleAddingNewJuiceToInventory}
       />;
      buttonText = "Return to Inventory"
      } else {
      currentlyVisibleState = 
      <Inventory 
      inventory={this.state.masterInventory} 
      onJuiceSelection={this.handleChangingSelectedJuice} 
      />;
      buttonText = "New Juice"
    }
    return (
      <React.Fragment>
        <div style={{minHeight: "5em", maxHeight: '100em', width: "100%", border: 'solid 2px black', backgroundImage: `url(${'bottleshelf.jpg'})`}}>
          <p style={{minHeight: '100%', backgroundColor: "white", textAlign: 'center', padding: '1em', border: 'solid 2px black', margin: '-2px'}}>Inventory</p>
          {currentlyVisibleState}
          <button style={{padding: '1em', width: '100.4%', border: 'solid 2px black', marginLeft: '-2px', marginBottom: '-2px', marginRight: '-2px'}} onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    )
  }


}

export default JuiceControl;