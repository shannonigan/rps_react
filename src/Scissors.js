import React from "react"


const Scissors = (props) => (
  <img onClick={() => props.userChoice(3)} id="scissors" class="scissors" src="https://www.campcanary.co.uk/uploads/scissors-icon-grey.png"></img>

)

export default Scissors;