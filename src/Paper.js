import React from "react"


const Paper = (props) => (
  <img
    onClick={() => props.choice("Paper")}
    id="paper"
    className="paper"
    src="https://www.campcanary.co.uk/uploads/paper-icon-grey.png"
  ></img>

);

export default Paper;

