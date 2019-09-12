import React from "react";


const Rock = props => (
  <div>
    <img
      onClick={() => props.choice("Rock")}
      id="rock"
      className="rock"
      src="https://www.campcanary.co.uk/uploads/rock-icon-grey.png"
    ></img>

    <div>
      {/* if (props.computerChoice === "Rock") */}




      {/* {computerChoice === "Rock" ? win: "Tie" :}
    props.computerChoice
  if (props.computerChoice == "rock") {

       
        ys.innerHTML = score
        cs.innerHTML = cscore
      }
      else if (props.computerChoice == "scissors") {

       
        score++;
        ys.innerHTML = score
        cs.innerHTML = cscore
      }
      else if (props.computerChoice == "paper") {

       
        cscore++;
        ys.innerHTML = score
        cs.innerHTML = cscore
      }
      } */}
    </div>
  
  </div>

    );
    export default Rock;
