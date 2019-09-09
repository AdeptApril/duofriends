import React, { Component } from 'react';
// import { render } from 'react-dom';
// import logo from './logo.svg';
import DuoAPI from './DuoAPI.js';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.retrieveDataOn = this.retrieveDataOn.bind(this);
    // DuoAPI.getUser = DuoAPI.getUser.bind(this);
    // DuoAPI.onUserReady = DuoAPI.onUserReady.bind(this);
    this.state = { items: null };
  }

  retrieveDataOn(username) {
    // let result = fetch(`https://www.duolingo.com/api/1/users/show?username=AdeptApril`);
      // .then(result=>result.json())
      //.then(items=>this.setState({items}))
    DuoAPI.getUser({username:username});
    // DuoAPI.onUserReady(function(){
    //   // console.log(DuoAPI.getProfile().fullname);
    //   // console.log(DuoAPI.getWords());
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <div>
            <p className="summon-info"
              // onMouseEnter={() => this.handlePictureChange("bioPic")}
               onClick={() => this.retrieveDataOn("AdeptApril")}>
              Retrieve data from Duolingo
            </p>
          </div>
          <div>
            <ul>
              {/*{this.state.items.map(item=><li key={item.id}>{item.body}</li>)}*/}
              {this.state.items}
            </ul>
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
