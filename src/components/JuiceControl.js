import React from "react";
import NewJuice from "./NewJuice";
import Inventory from "./Inventory";
import JuiceInfo from "./JuiceInfo"

class JuiceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterInventory: [],
      selectedJuice: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
      if (this.state.selectedJuice != null) {
      currentlyVisibleState = <JuiceInfo juice = {this.state.selectedJuice }/>
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