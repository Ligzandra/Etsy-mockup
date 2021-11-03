import React,{useEffect, useState, useContext} from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import img1 from "../Assets/Banner img_1.jpg"
import img11 from "../Assets/Masks4.jpg"
import Card from "../Components/Card"
import {useParams} from "react-router-dom"
import {Storage} from "../Context/Store"

function Cart(){
    let Store = useContext(Storage);
    let [product, setProduct] = useState([])
    let [cart, setCart] = Store.MyCart
    let {id} = useParams()

    // useEffect(()=>{
    //         let url= "http://206.189.124.254:9000/product/"+id;
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(res => {
    //             res.image = "http://206.189.124.254:9000"+res.image
    //              return res;
    //         })
            
    //         .then(e => {
    //             setProduct(e)
                
    //         })

            
    // },[]);

    return <>
            <Header/>
            <br/><br/>



      <div  className=" CartSec flex gap">

            <div className=" CartSec1 gap">

            {
                cart.map((e) => {
                    return ( 

                        <div className="flexD flex">
{/* for this section, i had to use the props property of the previous page
(basket-productpurchase, to get my image, price, description to show, that was after i passed same to the handleCart event) */}
                            <div className=" CartSecimg flex">
                                    <div className="CartImg" >
                                      <img src={e.image} alt=""/>
                                    </div>
                                  <div  className="CartProdName">
                                      
                                    <div className="flex gaps">
                                        <p><b>{e.gift2}</b></p><br/>
                                        <div className="CartSelect">
                                                
                                                    <select name="cars" id="cars">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                    </select>
                                            </div>
                                    </div><br/>
                                       <div className="flex">
                                           <p> Sarape Face Mask - Adjustable Knotted Soft Elastic - <br/>Unisex Adult Size - 2 Layer, Reusable, 
                                            Washable - Serape / Zarape / Zerape</p>

                                          
                                       </div><br/><br/>
                                       <div className=" CartSaver flex gap">
                                           <p>Save for later</p><br/>
                                           <p>Remove</p>
                                       </div>

                                  </div>
                                  <div>
                                      <b><p>USD {e.mainprice}</p></b>
                                  </div>
                            </div><br/><br/>

                      </div>
                       

                           
                         
                      
                    )
                })
            }
                         
           </div>       <br/>       
                         
                          <div className="CartSecCard"> 
                                <Card
                                    cardtype="How you'll pay"
                                                            
                                />
                            </div>

          
        
   </div>
            <Footer/>
        </>

            
}

export default Cart;