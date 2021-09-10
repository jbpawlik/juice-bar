import React from "react";

function Header() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='jumbotron' id='headerText' style={{margin: '50px', display: 'flexbox', flex: 'inline-flex', maxWidth: '100%' }}>
        <h1 ><img src="hummingbird2.jfif" width='80' alt='Hummingbird'></img>Hummingbird Juice Bar<img src="hummingbird1.jfif" width='100' alt='Hummingbird'></img>
        </h1>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Header;