import React, {useContext, useEffect, useState} from "react"
import Header from "../Components/Header"
import img1 from "../Assets/Banner img_1.jpg"
import img6 from "../Assets/Masks1.jpg"
import img7 from "../Assets/Masks2.jpg"
import img8 from "../Assets/Masks3.jpg"
import img12 from "../Assets/Masks5.jpg"
import img13 from "../Assets/Masks6.jpg"
import img14 from "../Assets/Masks7.jpg"
import img9 from "../Assets/Edit img_4.jpg"
import img11 from "../Assets/Masks4.jpg"
import img10 from "../Assets/infologo.JPG"
import ProductPurchase from "../Components/ProductPurchase"
import Popular from "../Components/Popular"
// import Selections from "../Components/Selections"
import Footer from "../Components/Footer"
import {useParams} from "react-router-dom"
// import {Storage} from "../Context/Store"


function Basket(){
    // let Store = useContext(Storage)
    let [product, setProduct] = useState([])
    let {id} = useParams()


    useEffect(()=>{
            let url= "http://206.189.124.254:9000/product/"+id;
            fetch(url)
            .then(res => res.json())
            .then(res => {
                res.image = "http://206.189.124.254:9000"+res.image
                 return res;
            })
            
            .then(e => {
                setProduct(e)
                
            })

            
    },[]);
console.log()
    
    // let Store = useContext(Storage);
    // let [image] = Store.pimage;
    // let [name, setName] =Store.info;
    // let [price, setPrice] =Store.pprice;
    // let [description, setDesc] = Store.pdesc;


    return <>
            <Header/>
           <div>
               <div className="PurchaseWarn flex ">
                     <img className="PurchaseInfo" src={img10} alt=""/>
                   <p>Items sold by Etsy sellers, such as masks, aren't medical-grade. Etsy sellers can't make medical or health claims. When selecting a mask, consult official guidance<br/> to make the right choice for you. More info.</p>
               </div>

               <div className="PurchaseDesc flex gap">
                      <div className="PurchaseDescSides">
                               <div className="PurchaseDescSide">
                                  <img  src={img1} alt=""/>
                               </div>
                               <div className="PurchaseDescSide">
                                      <img  src={img12} alt=""/>
                               </div>
                               <div className="PurchaseDescSide">
                                  <img  src={img14} alt=""/>
                               </div>
                               <div className="PurchaseDescSide">
                                   <img  src={img8} alt=""/>
                               </div>
                               <div className="PurchaseDescSide">
                                     <img  src={img11} alt=""/>
                               </div>
                               <div className="PurchaseDescSide">
                                      <img  src={img1} alt=""/>
                               </div>
                               <div className="PurchaseDescSide">
                                   <img  src={img8} alt=""/>
                               </div>
                               <div className="PurchaseDescSide">
                                     <img  src={img11} alt=""/>
                               </div>
                              
                       </div>
                    {/* <div className="PurchaseDescInfo">
                          <img className="PurchaseDescImg"  src={image} alt=""/>
                    </div> */}
                    <div className="PurchaseDescProd">

                           
                               
                         { product ? <ProductPurchase
                               id={product._id}
                               image={product.image}
                               gift2={product.description}
                               price="748"
                               mainprice={product.price}
                               discounted="USD 0.6"
                               disprice="(80% off)"
                              
                          /> : ""}
                           
                    </div>
               </div><br/><br/>

           </div>
          


            <br/>
          
                
           <br/> <br/> <br/>
            <div className=" Selection">
                    <div className="SelectEdit flex">
                            <h1>Similar to recently viewed </h1>
                            
                    </div>
                    <div className="PopularImages flex gap">
                        <Popular
                            image={img11}
                            gift1="Anniversary Gift for Him,Pers..."
                            gift2="StayFinePersonified"
                            price="(123,000)"
                            mainprice="USD 200"
                            discounted="USD 72.99"
                            disprice="(80% off)"
                        />
                         <Popular
                            image={img7}
                            gift1="Anniversary Gift for Him,Pers..."
                            gift2="StayFinePersonified"
                            price="(123,000)"
                            mainprice="USD 200"
                            discounted="USD 72.99"
                            disprice="(80% off)"
                        />
                        
                        <Popular
                            image={img13}
                            gift1="Anniversary Gift for Him,Pers..."
                            gift2="StayFinePersonified"
                            price="(123,000)"
                            mainprice="USD 200"
                            discounted="USD 72.99"
                            disprice="(80% off)"
                        />
                         <Popular
                            image={img1}
                            gift1="Anniversary Gift for Him,Pers..."
                            gift2="StayFinePersonified"
                            price="(123,000)"
                            mainprice="USD 200"
                            discounted="USD 72.99"
                            disprice="(80% off)"
                        />
                         <Popular
                            image={img6}
                            gift1="Anniversary Gift for Him,Pers..."
                            gift2="StayFinePersonified"
                            price="(123,000)"
                            mainprice="USD 200"
                            discounted="USD 72.99"
                            disprice="(80% off)"
                        />
                         <Popular
                            image={img9}
                            gift1="Anniversary Gift for Him,Pers..."
                            gift2="StayFinePersonified"
                            price="(123,000)"
                            mainprice="USD 200"
                            discounted="USD 72.99"
                            disprice="(80% off)"
                        />
               </div>
            </div>
         
            <Footer/>
            </>

            
}

export default Basket;