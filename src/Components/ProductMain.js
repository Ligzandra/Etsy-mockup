import React, {useContext} from "react"
import {Link} from "react-router-dom";
import {Storage} from "../Context/Store"

function ProductMain(props){

    let Store = useContext(Storage);
    // let [image, setImage] =Store.pimage;
    // let [name, setName] =Store.info;
    // let [price, setPrice] =Store.pprice;
    // let [description, setDesc] = Store.pdesc;
    
    let route = "/basket/"+props.id
    

    return <>

             <div className="ProductMainSec flex gap">
                 <div className="ProductDescInfo">
                          <img className="ProductDescImg" src={props.image}  alt=""/>
                    </div>
                     <div className="ProductMainSecDesc">
                       <Link to={route} style={{textDecoration:"none", color:"black"}} >
                          <div className="ProductMainSecInfo flex">
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
                            <h6>{props.gift1}</h6>
                                <h3>{props.gift2}</h3>
                           
                            <h4>{props.mainprice}</h4>
                            <h5><s>{props.discounted}</s>{props.disprice}</h5>
                            <br/>
                            <button className="ProductMainBtn"><Link to={route}  style={{textDecoration:"none", color:"black"}}  >Shop this Item</Link></button>

                       </Link>
                    </div>  
                        
              </div>

    </>
}


export default ProductMain;