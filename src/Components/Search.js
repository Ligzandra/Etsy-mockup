import React from "react"
import {Link} from "react-router-dom";

function Search(props){
    return <>

             <div className="SearchSec">
                     <div className="SearchSecImg">
                         <img src={props.image} alt=""/>
                     </div> 
                     <div className="SearchSecDesc flex">
                         <Link to="/product" style={{textDecoration:"none", color:"black"}} ><p> {props.desc} </p></Link>
                         <div className="SearchSecInfo">
                             <span class="fa fa-arrow-right " aria-hidden="true"></span>

                         </div>
                    </div>        
              </div>

    </>
}


export default Search;