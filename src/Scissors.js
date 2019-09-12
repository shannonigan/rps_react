import React from "react"



const Scissors = (props) => (
  <img
    onClick={() => props.choice("Scissors")}
    id="scissors"
    className="scissors"
    src="https://www.campcanary.co.uk/uploads/scissors-icon-grey.png"
  ></img>
)

export default Scissors;