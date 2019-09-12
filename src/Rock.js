import React from "react"


const Rock = (props) => (
  <img onClick={() => props.userChoice(1)} id="rock" class="rock" src="https://www.campcanary.co.uk/uploads/rock-icon-grey.png"></img>

)

export default Rock;