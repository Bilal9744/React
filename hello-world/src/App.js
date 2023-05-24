import React, { Component } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { Userprovider } from './components/UserContext';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import Cunter from './components/Cunter';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import User from './components/User';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import PortalDemo from './components/PortalDemo';
// import FRParentInput from './components/FRParentInput';
// import FocusInput from './components/FocusInput';
// import PureComp from './components/PureComponent';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FragmentsDemo from './FragmentsDemo';
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
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import LifeCycleB from './components/LifeCycleB';
// import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
     <Userprovider value='vishwas'>  
       <ComponentC />
     </Userprovider>
        {/* <Cunter>{(count,incrementCount) => 
        <ClickCounter2 count={count} incrementCount={incrementCount} />}</Cunter>
        <Cunter>{(count,incrementCount) => 
        <HoverCounter2 count={count} incrementCount={incrementCount} />}</Cunter> */}

        {/* <ClickCounter2 /> */}
        {/* <HoverCounter2 /> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? 'vishwas' : 'Guest'}/> */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <ErrorBoundary>
        <Hero heroName="superman"></Hero>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="joker"></Hero>
        </ErrorBoundary> */}

         

        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentsDemo /> */}
        {/* <LifeCycleA /> */}
        {/* <LifeCycleB /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>success</h1> */}
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
