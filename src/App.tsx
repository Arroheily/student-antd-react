import * as React from 'react';
import Home from '../src/page/Home';
import './App.css';

class App extends React.Component {
  public handleClick = (e: any) => {
    console.log('click ', e);
  }
  public render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;