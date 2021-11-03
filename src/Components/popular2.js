import React, {useContext} from "react"
import {Link} from "react-router-dom";
import {Storage} from "../Context/Store"

function Popular2(props){
    let Store = useContext(Storage);
    let [image, setImage] =Store.pimage;
    let [name, setName] =Store.info;
    let [price, setPrice] =Store.pprice;
    let [description, setDesc] = Store.pdesc;
    

    let add= () => {
            setImage(image);
            setPrice(price);
            setDesc(description);
            setName(name);
            
    }


    return <>

             <div className="PopularSec">
                     <div className="PopularSecImg">
                        <Link to="/basket"> <img src={props.image} alt="" onClick={() => { add() }} /></Link>
                     </div> 
                     <div className="PopularSecDesc">
                       <Link to="/product" style={{textDecoration:"none", color:"black"}} >
                            <h6>{props.pname}</h6>
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


export default Popular2;