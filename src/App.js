import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Members from './components/members';
import Member from './components/member';
import AddMember from './components/addMember';

class App  extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <main className="container">
          <AddMember/>
          <Members/>
        </main>
      </React.Fragment>
     );
  }
}

export default App;
