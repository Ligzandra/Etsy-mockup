import React, {useContext} from "react"
import AdminImg1 from "../../Assets/admin icon.jpg"
import {Link} from "react-router-dom";
import {Storage} from "../../Context/Store"







function CreateUser(){
    let Store = useContext(Storage)
    let [name, setName] = Store.info;
    let [phone, setPhone] = Store.phone;
    let [email, setEmail] = Store.email;
    let [password, setPassword] = Store.password;

    let handleCreateUser= () => {
        let url = "http://206.189.124.254:9000/register";
        let payload = {
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
          method: "Post",
          body: JSON.stringify(payload)
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
          setName("");
          setPhone("");
          setEmail("");
          setPassword("");
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
                        {/* <form action="http://206.189.124.254:9000/register" method="POST" enctype="application/x-www-form-urlencoded"> */}
                            <input className="prod-1" type="text" placeholder="Name" name="name" value={name} onChange={(e)=> setName(e.target.value)}/><br/><br/>
                            <input className="prod-1" type="number" placeholder="Phone Number" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} /><br/><br/>
                            <input className="prod-1" type="email" placeholder="Email Address" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} /><br/><br/>
                            <input className="prod-1" type="password" placeholder="Password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
                           <button className="prod-1" onClick={()=> handleCreateUser()}>CREATE USER</button>
                        
                        {/* </form>  */}
                        </div>
        </div>
    </div>

    
    
    
    </>
}

export default CreateUser;