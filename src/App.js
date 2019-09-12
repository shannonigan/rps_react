import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";




class App extends React.Component{
  state = {
    weapons: [ 
      {id:1, name: "rock"}, 
      {id:2, name: "paper"},
      {id:3, name: "scissor"},
    ],
    twoPlayer: false,
    userChoice: 0,
    compChoice: 0,
    userScore: 0,
    compScore: 0,
  };

 
  userChoice = (id) => {
    this.setState({ userChoice: id })
  }

  compChoice = (id) => {
   this.setState({ compChoice: [Math.floor(Math.random() * weapons.length)]})
  }
 //^ not working..
  
  render(){
    return (
      <Container style={{ marginTop: "25px", }}>
        <Header
          as="h1"
          color="red"
          textAlign="center"
          >
            {this.props.title}
        </Header>


        {/* Toggle Button (comp/2nd player)  */}


        <h2 class="score"> Score: </h2>

        <div style={{textAlign: "center"}}>

          <Rock userChoice={this.userChoice} />

          <Paper userChoice={this.userChoice} />
          
          <Scissors userChoice={this.userChoice} />
        </div>
      </Container>
    )
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


// toggleCards = (id) => {
//   this.setState({
//     cards: this.state.cards.map(card => {
//       if (card.id === id) {
//         return { ...card, showBack: !card.showBack }
//       }
//       return card;
//     })
//   })
// };