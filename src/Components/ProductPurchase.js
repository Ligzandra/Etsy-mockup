import React, {useContext, useState} from "react"
import {Link} from "react-router-dom";
import {Storage} from "../Context/Store"
import img9 from "../Assets/Edit img_4.jpg"

function ProductPurchase(props){

    let Store = useContext(Storage);
    let [image] = Store.pimage;
    let [count, setCount]= Store.counter;
    let [open, setOpen] = useState(true);
    let [cart, setCart] = Store.MyCart
    let [product, setProduct] = useState([])

    // let route = "/cart/"+props.id

//    let addd=() => {
//        count ++;
//        setCount(count);
//     //    setOpen(true);
//    }

   let handleCart =(_id, image, gift2, mainprice ) =>{

    let item = cart.find((x) => x._id === _id);
    if (!item) {
      let data = { _id, image, gift2, mainprice };
      let cartItems = [...cart];
      cartItems.push(data);
      setCart(cartItems);
      count ++;
           setCount(count);
           setOpen(true);
    };

              
       

   }
    return <>

       <div className="Purchaser flex"> 
                  <div className="PurchaseDescInfo">
                          <img className="PurchaseDescImg"  src={props.image} alt=""/>
                    </div>
              <div className="ProductMainSec">
                     
                     <div className="ProductMainSecDesc">
                       <Link to="/cart" style={{textDecoration:"none", color:"black"}} >
                          <div className="ProductMainSecInfo flex">
                                 <div>
                                        <p>{props.price}sales</p> 
                                </div><br/>
                                <div>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                    <span class="fa fa-star " aria-hidden="true"></span>
                                </div>
                               
                            </div>
                            <h6>{props.gift1}</h6>
                                <h3>{props.gift2}</h3>
                           
                              <div className="PurchaseMajor flex sbw">
                                <div className="PurchaseMain flex ">
                                        <h4>{props.mainprice} </h4> 
                                        <sup><s>{props.discounted}</s></sup>
                                    </div>
                                    <div className="stock">
                                        <p>LOW IN STOCK</p>
                                    </div>
                              </div>

                            <h5 >You save {props.disprice}</h5>
                            <h6 className="Local">Local taxes included (where applicable)</h6>
                       </Link>
                    </div>  

                    <div>
                        <div className="PurchaseColor">
                             
                             <label for="cars">color</label><br/>

                                <select name="cars" id="cars">
                                        <option value="">Select an Option</option>
                                        <option value="white">white</option>
                                        <option value="blue">blue</option>
                                        <option value="mixed">Mixed</option>
                                  </select>
                        </div>
                        <div className="PurchaseColor">
                             
                             <label for="cars">Quantity</label><br/>

                                <select name="cars" id="cars">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                  </select>
                        </div>
                    </div>

                    <button className="PurchaseMainBtn" onClick={() => (props.gift2)} >
                        <Link to="/cart" onClick={()=> handleCart(props.id, props.image, props.gift2, props.mainprice)} style={{textDecoration:"none", color:"white"}} >Add to basket</Link></button>
                        <div className="Dont">
                            <p>
                            <b>Don't miss out.</b> There's only 5 available and over 20<br/> people have this in their basket right now.
                            </p>
                        </div>
              </div>

  
            </div>
          </>
}


export default ProductPurchase;