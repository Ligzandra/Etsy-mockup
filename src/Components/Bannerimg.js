import React,{useContext} from "react"
import {Link} from "react-router-dom";
import {Storage} from "../Context/Store"

function Bannerimg(props){

    let Store = useContext(Storage);
    let [image, setImage] =Store.pimage;
    let [name, setName] =Store.info;
    let [price, setPrice] =Store.pprice;
    let [description, setDesc] = Store.pdesc;
    

    // let add= () => {
    //         setImage(image);
    //         setPrice(price);
    //         setDesc(description);
    //         setName(name);
             
    //         console.log(price);
    // }

    let route = "/product/"+props.id
    return <>

             <div className="BannerSec">
                     <div className="BannerSecImg">
                         <img src={props.image} alt=""/>
                     </div> 
                     <div className="BannerSecDesc flex">
                         <Link to={route}   style={{textDecoration:"none", color:"black"}} ><p> {props.desc} </p></Link>
                         <div className="BannerSecInfo">
                             <span class="fa fa-arrow-right " aria-hidden="true"></span>

                         </div>
                    </div>        
              </div>

    </>
}


export default Bannerimg;