import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";



class App extends React.Component {
  state = {
    weapons: [
      { id: 1, name: "Rock" },
      { id: 2, name: "Paper" },
      { id: 3, name: "Scissors" }
    ],
    twoPlayer: false,
    usersChoice: 0,
    compChoice: 0,
    userScore: 0,
    compScore: 0,
  };


  choice = (name) => {
    this.setState({ usersChoice: name });
    // console.log("You chose " + this.state.usersChoice)
    this.computerChoice()
  };


  computerChoice = name => {
    const { weapons } = this.state;
    this.setState({ compChoice: weapons[Math.floor(Math.random() * weapons.length)].name });
  };


  // uScore = name => {
  //   this.setState({ userScore: userScore++})
  // }


  // cScore = name => {
  //   this.setState({ compScore: compScore++})
  // }


  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <Header size="huge" color="red" textAlign="center">
          {this.props.title}
        </Header>
        {/* Toggle Button (comp/2nd player)  */}
        <h2 class="sscore"> Score: </h2>
        <div id="userScore" className="score">
          Player Wins: {this.state.userScore}
        </div>
        <br/>
        <div id="compScore" className="cscore">
          Comp Wins: {this.state.compScore}
        </div>
        
        <div style={{ textAlign: "center" }}>
          <Rock choice={this.choice} />
          <Paper choice={this.choice} />
          <Scissors choice={this.choice} />
        </div>

        <div className="player">
          Player Choice:  {this.state.usersChoice}
        </div>
        <br/>
        <div className="comp">
          Comp Choice: {this.state.compChoice}
        </div>
      
        <div className="win">
          Ready to play?
        </div>
      </Container>
    );
  }
}



export default App;



// Basic Objectives:
// A user selects rock, paper, or scissors
// Computer randomly chooses
// Display the user and computers choice on the screen
// Display the winner
// Keep track of wins, losses, & ties
// Use images to make a choice

// Bonus Objectives:
// Track the percentage of times the user has won/ lost/ tied
// Make it so it works with two players
// See if you can use componentDidUpdate( ) 
// Color a win differently than a loss so it is easy to tell if the user won.


// togglePlayer = (id) => {
//   this.setState({
//     cards: this.state.cards.map(card => {
//       if (card.id === id) {
//         return { ...card, showBack: !card.showBack }
//       }
//       return card;
//     })
//   })
// };