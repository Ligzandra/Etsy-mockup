import React, {useContext, useEffect, useState,useRef} from "react"
import AdminImg1 from "../../Assets/admin icon.jpg"
import {Link} from "react-router-dom";
import {Storage} from "../../Context/Store"








function AllUsers(){
    
    let Store = useContext(Storage);
    let [post, setPost] = useState([]);
    // let [open, setOpen] = Store.modal;
    let [name, setName] = Store.info;
    let [phone, setPhone] = Store.phone;
    let [email, setEmail] = Store.email;
    let [password, setPassword] = Store.password;
    // let [get, setGet]= useState("")
    // let [show, ]= useState(true)
    let btnShow=useRef()
    let btnHide=useRef()
    let [userId, setUserId]=useState(null)

   

    useEffect(() => {
       getUsers()
      }, []);


      function getUsers(){
        let url = "http://206.189.124.254:9000/users";
        fetch(url)
          .then((e) => e.json())      
          .then((res) => {
            setPost(res);
            setUserId(res[0]._id)
          });
      }

      let handleEdit=(i) =>{
            let items= post[i]
            setName(items.name);
            setPhone(items.phone);
            setEmail(items.email);
            setPassword (items.password);    
            setUserId(items._id);

        btnHide.current.style.display= "block";
        btnShow.current.style.display= "none";
              
      };

      let handleUpdateUser= () => {
        let url = "http://206.189.124.254:9000/user/"+ userId;
        let items = {
            name,
            phone,
            email,
            password
            
        };
        //This is using a fetch promise
        fetch(url, {
          headers: {
            "content-type": "application/json"
          },
          method: "Put",
          body: JSON.stringify(items)
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            getUsers()
          });
          btnHide.current.style.display= "none";
          btnShow.current.style.display= "block";
      };



    
        let handleDelete=(id) =>{
          let url = "http://206.189.124.254:9000/user/" + id;
         
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
                getUsers(); 
              });
       
  
      };
  

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

                        
                        <div className="table">
                      
                        
                        
                        <div class="content">

              {/* {
                  get ? <> */}
                    <div  className="products " ref={btnHide} style={{display:"none"}}><br/>
                           <input className="prod-1" type="text" placeholder="Name" name="name" value={name} onChange={(e)=> setName(e.target.value)}/><br/><br/>
                            <input className="prod-1" type="number" placeholder="Phone Number" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} /><br/><br/>
                            <input className="prod-1" type="email" placeholder="Email Address" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} /><br/><br/>
                            <input className="prod-1" type="password" placeholder="Password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
                           <button className="prod-1" onClick={()=> handleUpdateUser()}>UPDATE USER</button>
                        </div>
                  {/* </>:<></>
              } */}

                <div className="table1">
                    <div className="thead1">
                        <div className="th1">
                            <div className="row1 rowTitle">
                                 <div className="tcol2">S/no</div>
                                <div className="tcol2">Name</div>
                                <div className="tcol2">Phone</div>
                                <div className="tcol2">Email</div>
                                <div className="tcol2">Password</div>
                                <div className="tcol2">ACTIONS</div>
                            
                    </div>
                        </div>
                    </div>
                    
                    <br/>

                     {post.map((e, i) => {
                        return (
                        <div key={i} className="" ref={btnShow} style={{display:"block"}}>
                            
                            <div className="row1">
                                 <div className="tcol2">{i}</div>
                                <div className="tcol2"> {e.name}</div>
                                <div className="tcol2">{e.phone}</div>
                                <div className="tcol2"> {e.email}</div>
                                <div className="tcol2"> {e.password}</div>
                                <div className="tcol2 Actions flex ">
                                    <button  onClick={() => handleEdit(i)}> Edit</button>
                                    <button  onClick={() => handleDelete(e._id)}> Delete</button>

                                </div>-
                          </div>
                        </div>
                        );
                    })}


              
                </div>     
           </div>
           </div>
           </div>
           
    
    
    
    </>
}

export default AllUsers;