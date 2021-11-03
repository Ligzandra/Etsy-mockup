import React, {useState, useEffect} from "react"
import AdminImg1 from "../../Assets/admin icon.jpg"
import {Link} from "react-router-dom";








function AllProducts(){

    let [names, setNames] = useState("");
    let [price, setPrice] = useState("");
    let [image, setImage] = useState("");
    let [quantity, setQuantity] = useState("");
     let [post, setPost] = useState([]);
    let [description, setDescription] = useState("");
    let category="La Mattina";
    // let btnShow =useRef();


    useEffect(() => {
        loadProduct();
      }, []);

      let loadProduct=() => {
        let url = "http://206.189.124.254:9000/products";
        fetch(url)
          .then((e) => e.json())      
          .then((res) => {
            setPost(res);
          });
      }

    let handleUpdate = () => {
        let url = "http://206.189.124.254:9000/create/product";
        let payload = {
            names,
            price,
            image,
            quantity,
            description,
            category


        };
        //This is using a fetch promise
        fetch(url, {
          headers: {
            "content-type": "application/json"
          },
          method: "Post",
          body: JSON.stringify(payload)
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      };

      let handleEdit=() =>{
        

    };
    let handleDelete=(id) =>{
        let url = "http://206.189.124.254:9000/product/" + id;
       
     if (window.confirm("Are you sure?")){
            //This is using a fetch promise
        fetch(url, {
            headers: {
              "content-type": "application/json"
            },
            method: "Delete",
           
          })
            .then((res) => res.json())
            .then(() => {
              alert("operation successful");
              loadProduct();
            });
     }

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
                {/* <div className="products"><br/>
                <form action="" method="" enctype="">
                       <input className="prod-1" type="text" placeholder="Product Name" name="name" value={names} onChange={(e)=> setNames(e.target.value)}/><br/><br/>
                        <input className="prod-1" type="text" placeholder="Product Category" name="category" value={category}/><br/><br/>
                        <input className="prod-1" type="number" placeholder="Price" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}/><br/><br/>
                        <input className="prod-1" type="number" placeholder="Quantity" name="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/><br/><br/>
                        <label for=""> Upload Image</label><br/><br/>
                        <input className="prod-1" type="file" placeholder="Product Category" name="image" value={image} onChange={(e)=> setImage(e.target.value)}/><br/><br/>
                        <textarea className="prod-1" cols="10" rows="7" name="description" placeholder="Descripton" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea><br/><br/>
                       <button className="prod-1"  onClick={()=> handleUpdate()}>CREATE PRODUCT</button>
                </form> 
                </div> */}
                
                <div className="table1">
                <div className="thead1">
                    <div className="th1">
                        <div className="row1 rowTitle">
                            <div className="tcol1">Image</div>
                            <div className="tcol1">Name</div>
                            <div clasName="tcol1">Category</div>
                            <div className="tcol1"> Price</div>
                            <div className="tcol1">Quantity</div>
                            <div className="tcol1">Description</div>
                            <div className="tcol1">ACTIONS</div>
                          
                   </div>
                    </div>
                </div>
                
                <br/>
              {/* <div className="tbody"> */}
              {post.map((e) => {
                    
                    if (e.category === "Sony" || e.category === "La Mattina" ) {
  
                        return (
                        <div key={e._id} className="">
                            {/* <div className="tcol2">{e.id}</div> */}
                            <div className="row1">
                                 <div className="tcol2"><img src= {e.image} alt="mattina img"/></div>
                                <div className="tcol2"> {e.name}</div>
                                <div className="tcol2"> {e.category}</div>
                                <div className="tcol2">{e.price}</div>
                                <div className="tcol2"> {e.quantity}</div>
                                <div className="tcol2"> {e.description}</div>

                                <div className="tcol2 Actions flex ">
                                   
                                    <button  onClick={() => handleEdit(e)}> Edit</button>
                                    <button  onClick={() =>  handleDelete(e._id)}> 
                                        { <svg
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 354.319 354.319"
                                            style={{ width: "20px", height: "20px", fill: "white" }}
                                        >
                                            <path d="M293.765,125.461l-41.574-17.221l17.221-41.574c3.17-7.654-0.464-16.428-8.118-19.599L150.428,1.146  C142.775-2.024,134,1.61,130.83,9.264l-17.221,41.574L72.035,33.617c-7.654-3.17-16.428,0.464-19.599,8.118  c-3.17,7.654,0.464,16.428,8.118,19.599l55.433,22.961l96.628,40.024H87.16c-8.284,0-15,6.716-15,15v200c0,8.284,6.716,15,15,15h180  c8.284,0,15-6.716,15-15V153.126l0.125,0.052c1.877,0.777,3.821,1.146,5.734,1.146c5.886,0,11.472-3.487,13.864-9.264  C305.053,137.406,301.419,128.631,293.765,125.461z M141.326,62.318l11.48-27.716l83.148,34.441l-11.48,27.716L182.9,79.539  L141.326,62.318z" />
                                        </svg> }
                                    </button>
                                </div>
                          </div>
                        </div>
                        );}
                    })}


              
              {/* </div> */}
           </div>
           </div>
    
    
    
    </>
}

export default AllProducts;