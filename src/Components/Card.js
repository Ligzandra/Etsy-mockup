import React from "react";
import {Link} from "react-router-dom";


// function handleClick(param) {
//   alert("This is a " + param + " card");
// }

function Card(props) {
  return (
    <div  className="CardProp">
                <div className="CardProps" onClick={() => props.click(props.cardtype)}>
            <div><h4>{props.cardtype}</h4></div>
            <div className="flex space-btw margin">
                <div>{props.no}</div>
               
            </div>
                  <div className="CardBtn">
                      <button className="CardMainBtn"><Link to="/siginIn" style={{textDecoration:"none", color:"white"}} >Proceed to Checkout</Link></button>
                       <p>Local taxes included (where applicable)</p>
                </div>
            </div>
    </div>
  );
}

export default Card;
