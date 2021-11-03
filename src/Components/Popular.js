import React from "react"
import {Link} from "react-router-dom";

function Popular(props){
    return <>

             <div className="PopularSec">
                     <div className="PopularSecImg">
                         <img src={props.image} alt=""/>
                     </div> 
                     <div className="PopularSecDesc">
                       <Link to="/product" style={{textDecoration:"none", color:"black"}} >
                            <h6>{props.gift1}</h6>
                                <p>{props.gift2}</p>
                            <div className="PopularSecInfo flex">
                                <div>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                </div>
                                <div>
                                        <p>{props.price}</p>
                                </div>
                            </div>
                            <h4>{props.mainprice}</h4>
                            <h5><s>{props.discounted}</s>{props.disprice}</h5>
                       </Link>
                    </div>  
                    <div className="PopularTooltip">
                            <p>Lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum
                            <br/>RN321</p>
                     </div>      
              </div>

    </>
}


export default Popular;