import React, { Component } from 'react';
import './App.css';
// import Greet from './components/Greet';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
// import Message from './components/message';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        {/* <Greet name="Bruce" heroName="Superman">
          <p>This is children props</p>
        </Greet>
        <Greet name="clark"  heroName="Batman">
          <button>Action</button>
        </Greet>
        <Greet name="diana"  heroName="Wonder Women"/>
        <Welcome name="Bruce" heroName="Superman"/>
        <Welcome name="clark"  heroName="Batman"/>
        <Welcome name="clark"  heroName="Batman" /> */}
        {/* <Hello /> */}
        {/* <Message /> */}

      </div>
    );
  }

  }


export default App;
