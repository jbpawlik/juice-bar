import React from "react";
import NewJuice from "./NewJuice";
import Inventory from "./Inventory";

class JuiceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterInventory: []
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
      if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewJuice onNewJuiceCreation={this.handleAddingNewJuiceToInventory}/>
      buttonText = "Return to Inventory"
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.masterInventory}/>
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