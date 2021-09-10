import React from 'react';
import Header from './Header'
import JuiceControl from './JuiceControl'

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
        <div className="row">
            <JuiceControl />           
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
