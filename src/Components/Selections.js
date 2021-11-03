import React from "react"
import {Link} from "react-router-dom";

function Selections(props){
    return <>

             <div className="SelectionSec">
                     <div className="SelectionSecImg">
                         <img src={props.image} alt=""/>
                     </div> 
                    <Link to="/product" style={{textDecoration:"none", color:"black"}} >
                        <div className="SelectionSecDesc">
                            <p>{props.desc}</p>
                        </div>  
                    </Link>      
              </div>

    </>
}


export default Selections;