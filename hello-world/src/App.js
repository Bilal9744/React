import React, { Component } from 'react';
import './App.css';
// import Inline from './components/Inline';
// import NameList from './components/NameList';
// import Styesheets from './components/Styesheets';
// import UserGreeting from './components/UserGreeting';
// import Greet from './components/Greet';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
// import Message from './components/message';
// import Counter from './components/counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Eventbind from './components/Eventbind';
// import parentcomponent from './components/parentcomponent';
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>success</h1>
        {/* <Inline /> */}
         {/* <NameList /> */}
        {/* <Styesheets primary={true}/> */}
        {/* <UserGreeting /> */}
        {/* <parentcomponent /> */}
        {/* <Eventbind /> */}
        {/* <ClassClick></ClassClick> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter /> */}
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
