import React from "react"
import AdminImg1 from "../../Assets/admin icon.jpg"
import {Link} from "react-router-dom";






function Admin(){
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
                    <div className="tutti">
                        <div className="photo1">
                            <h2>PRODUCTS</h2>
                            <h1>1,090</h1>
                            
                        </div>
                        <div className="photo2">
                            <h2>USERS</h2>
                            <h1>558</h1>
                            
                        </div>
                        <div className="photo3">
                            <h2>REVIEWS</h2>
                            <h1>239</h1>
                        
                        </div>
                    
                    </div>
                </div>
    </div>

    
    
    
    </>
}

export default Admin;