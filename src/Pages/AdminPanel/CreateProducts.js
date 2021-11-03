import React, {useState} from "react"
import AdminImg1 from "../../Assets/admin icon.jpg"
import {Link} from "react-router-dom";






function CreateProduct(){
    let [names, setNames] = useState("");
    let [price, setPrice] = useState("");
    let [image, setImage] = useState("");
    let [quantity, setQuantity] = useState("");
    let [description, setDescription] = useState("");
    let category="La Mattina"

    let handleCreate = () => {
        // let url = "http://206.189.124.254:9000/create/product";
        // let payload = {
        //     names,
        //     price,
        //     image,
        //     quantity,
        //     description,
        //     category


        // };
        // //This is using a fetch promise
        // fetch(url, {
        //   headers: {
        //     "content-type": "application/json"
        //   },
        //   method: "Post",
        //   body: JSON.stringify(payload)
        // })
        //   .then((res) => res.json())
        //   .then((result) => {
        //     console.log(result);
        //   });

          setNames("");
          setPrice("");
          setImage("");
          setQuantity("");
          setDescription("");
      };


    return <>

            <div className="header">
                    <center><img className="image" src={AdminImg1} alt="adminicon"/><br/>Welcome to the Admin Panel<br/><br/>
                    <Link className="dash" to="/admin">DASHBOARD</Link></center>
                    
           </div>

           <div className="main-content">
                <div className="sidebar">
                <ul className="adminul">
                    <li className="adminli"><Link to="/admin">DASHBOARD</Link></li>
                    <li className="adminli"><Link to="/createproduct">CREATE PRODUCT</Link></li>
                    <li className="adminli"><Link to="/allproducts">ALL PRODUCT</Link></li>
                    <li className="adminli"><Link to="/createuser">CREATE USER</Link></li>
                    <li className="adminli"><Link to="/allusers">ALL USER</Link></li>

                            
                
                
                </ul>
                </div>

                
                <div className="content">
                   <div className="product"><br/>
                      <form action="http://206.189.124.254:9000/create/product" method="POST" encType="multipart/form-data">
                        <input className="prod-1" type="text" placeholder="Product Name" name="name" value={names} onChange={(e)=> setNames(e.target.value)}/><br/><br/>
                        <input className="prod-1" type="text" placeholder="Product Category" name="category" value={category}/><br/><br/>
                        <input className="prod-1" type="number" placeholder="Price" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}/><br/><br/>
                        <input className="prod-1" type="number" placeholder="Quantity" name="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/><br/><br/>
                        <label for=""> Upload Image</label><br/><br/>
                        <input className="prod-1" type="file" placeholder="Product Category" name="image" value={image} onChange={(e)=> setImage(e.target.value)}/><br/><br/>
                        <textarea className="prod-1" cols="10" rows="7" name="description" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea><br/><br/>
                       <button className="prod-1"  >CREATE PRODUCT</button>
                    
                    </form> 
            </div>
        </div>
    </div>

    
    
    
    </>
}

export default CreateProduct;