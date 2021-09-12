import React from "react";
import {Container} from "react-bootstrap";
import Inventory from "./Inventory";
import JuiceControl from "./JuiceControl";


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage, currentlyVisibleState:
      null,
      buttonText: "New Juice"
    }));
  }
  render() {
    
    let buttonText = null;
  
  return (
    <React.Fragment>
      <div style={{borderRadius: '5px', maxHeight: '100em'}}>
      <p style={{}}>Hummingbird Juice Bar and Retailer serves the greater Flamingo area.</p>
      <button onClick={this.handleClick}>Inventory</button>
      </div>
    </React.Fragment>
  )
  }
}

// currentlyVisibleState = 
// <Inventory 
// inventory={this.state.masterInventory} 
// onJuiceSelection={this.handleChangingSelectedJuice}
// />;

export default Sidebar;