import React from 'react';

import Users from '../containers/Users/index.jsx';

class App extends React.Component{
  render() {
    return (
      <div>
        Hello from React!!!  
        <Users />
      </div>
    );
  }
};

export default App;