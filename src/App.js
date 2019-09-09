import React, { Component } from 'react';
// import { render } from 'react-dom';
// import logo from './logo.svg';
//import DuoAPI from './DuoAPI.js';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.retrieveDataOn = this.retrieveDataOn.bind(this);
    this.assignData = this.assignData.bind(this);
    // DuoAPI.getUser = DuoAPI.getUser.bind(this);
    // DuoAPI.onUserReady = DuoAPI.onUserReady.bind(this);
    this.state = {
      profile: [],
      adeptApril: [],
      greenvioletamy: []
    };
  }

  retrieveDataOn(username) {
// fetch(`https://www.duolingo.com/api/1/users/show?username=AdeptApril`, { credentials: 'include' })
    fetch(`https://www.duolingo.com/users/` + username, { credentials: 'include' })
      .then(res => {
        if(res.ok) {
          return res;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .catch(console.error)
      //.then(response=>console.log(response));
      .then(response=>response.json())
      .then( myJSON=> {
        //console.log(JSON.parse(JSON.stringify(myJSON)));
        //return JSON.parse(JSON.stringify(myJSON));
        this.assignData(JSON.parse(JSON.stringify(myJSON)));
      });
    //.then(items=>this.setState({items}));
    //DuoAPI.getUser({username:username});
    // DuoAPI.onUserReady(function(){
    //   // console.log(DuoAPI.getProfile().fullname);
    //   // console.log(DuoAPI.getWords());
    // });
    // if(result != null)
    //   this.setState({profile:result});
  }

  assignData(newProfile)
  {
    console.log(newProfile.username);
    switch(newProfile.username)
    {
      case "AdeptApril":
        this.setState({adeptApril:newProfile});
        break;
      case "greenvioletamy":
        this.setState({greenvioletamy:newProfile});
        break;
      default:
        console.log("assignData got to a default case, somehow, with username: " + newProfile.username);
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <div>
            <p className="summon-info"
              // onMouseEnter={() => this.handlePictureChange("bioPic")}
               onClick={
                 () => {
                   this.retrieveDataOn("AdeptApril");
                   this.retrieveDataOn("greenvioletamy");
                 }
               }>
              Retrieve data from Duolingo
            </p>
          </div>
          <div>
            <ul>
              {/*{this.state.items.map(item=><li key={item.id}>{item.body}</li>)}*/}
              {/*{this.state.profile.fullname}*/}
              {this.state.adeptApril.fullname}
              {this.state.greenvioletamy.fullname}
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
