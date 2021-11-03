import React from "react"
import AdminImg1 from "../../Assets/admin icon.jpg"
import {Link} from "react-router-dom";






function AdminLogin(){
    return <>

            <div className="header">
                    <center><img className="image" src={AdminImg1} alt="adminicon"/><br/>Welcome to the Admin Panel<br/><br/>
                    <Link className="dash" to="/adminlog">DASHBOARD</Link></center>
                    
           </div>

            <div className="validate">
                <form action="">
                    <div className="logIn">
                        <center><input required type="text" placeholder="Username" className="useName"/>
                        </center>  <br/>
                        <center><input required type="password" placeholder="Password" className="useName"/>
                        </center>
                    </div><br/><br/>
                    <div className="buttons">
                    <center><Link to="/admin"><button type="button" className="log">LOG IN</button></Link></center>
                </div>
                </form>
            </div>

    
    
    
    </>
}

export default AdminLogin;