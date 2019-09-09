import React from 'react';

class DisplayProfiles extends React.Component {
  // getPoints()
  // {
  //   let total = 0;
  //   for(let i = 0; i < Object.keys(this.props.items.languages).length; i++)
  //   {
  //     total += this.props.items.language_data[Object.keys(this.props.items.language_data)[i]].num_skills_learned;
  //   }
  //   return total;
  // }

  render(){
    // let crowns = "this.props.items.language_data." + this.props.items.learning_language + ".num_skills_learned";
    // let points = this.getPoints();

    return (
      <div>
        <ul>
          <li><b>Name:</b> {this.props.items.fullname}</li>
          <li><b>Streak:</b> {this.props.items.site_streak}</li>
          <li><b>Lingots:</b> {this.props.items.rupees}</li>
          {/*<li><b>Points:</b> {points}</li>*/}
          {/*[Object.keys(this.props.items.language_data)[0]] is to get the first language data object, as it changes depending on the user's current language-to-be-learned.
          E.g., es if they're learning spanish, de if they're learning German, and probably something different if they're learning from languages other than English.*/}
          <li><b>Number of skills learned (whatever that means):</b> {this.props.items.language_data[Object.keys(this.props.items.language_data)[0]].num_skills_learned}</li>
          <li><b>Spanish points:</b> {this.props.items.languages[9].points}</li>
          <li><b>Spanish level:</b> {this.props.items.languages[9].level}</li>
          <li><b>German points:</b> {this.props.items.languages[21].points}</li>
          <li><b>German level:</b> {this.props.items.languages[21].level}</li>
          {/*<li><b>German crown level:</b> {this.props.items.language_data.de.num_skills_learned}</li>*/}
          {/*<li><b>:</b> {this.props.items.}</li>*/}
        </ul>
      </div>
    )
  }
}

export default DisplayProfiles;