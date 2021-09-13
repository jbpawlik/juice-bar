import React from "react";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
  render() {
  
  return (
    <React.Fragment>
      <div style={{borderRadius: '5px', maxHeight: '100em'}}>
      <p style={{}}>Hummingbird Juice Bar and Retailer serves the greater Flamingo area.</p>
      </div>
    </React.Fragment>
  )
  }
}

export default Sidebar;