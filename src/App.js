import React, { Component } from 'react';
// import { render } from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import DisplayProfiles from './DisplayProfiles.js';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.retrieveDataOn = this.retrieveDataOn.bind(this);
    this.assignData = this.assignData.bind(this);
    this.state = {
      profiles: [],
      profile: [],
    };
  }

  retrieveDataOn(username) {
    //The first line worked for a while, then started getting 401 unauthorized errors.
    //Then the same thing happened with the second line. Clearly there's some sort of Duolingo limit or problem,
    //So, for now, that means the project is over.
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

        //Add the newly retrieved profile to the profiles list
        this.setState({ profiles: this.state.profiles.concat(JSON.parse(JSON.stringify(myJSON))) });
      });
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
    let displayProfiles = this.state.profiles.map((thisForm) => (
      <DisplayProfiles key={thisForm.username} items={thisForm}/>
    ));

    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <div>
            <p className="summon-info"
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
              {/*{this.state.profile.fullname}*/}
              {displayProfiles}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
