import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom";
import logoSnip from "../Assets/logoSnip.JPG";
import {Storage} from "../Context/Store";



function Header(){
       
        let Store = useContext(Storage);
        let [email, setEmail]= Store.email;
        let [msg, setMsg] = Store.msg;
        let [count, setCount]= Store.counter
        let [open, setOpen] = Store.Opener;

        let handleSignIn= () => {

              let url = "http://206.189.124.254:9000/login";
                fetch(url, {
                        headers: {
                        "content-type": "application/json"
                        },
                        method: "Post",
                        body: JSON.stringify({ email})
                })
                        .then((e) => e.json())
                        .then((res) => {
                        if (res === null || res === undefined) {
                                setMsg("Invalid email");
                        } else {
                                alert("Successful");
                                setMsg(email);
                                window.localStorage.setItem("user", email);
                                console.log(email)
                                // window.location.href = "/home";
                        }
                        });
                        
        }
        


        let handleSign= () => {
                setOpen(true);
                setMsg(email);
                window.localStorage.setItem("user", email);
        }
        
        

    return <>
                <div className="NavBar">

                    <div className="NavFirst flex sbw">
                         <div className="NavLogoCon">
                             <Link to= "/home" >
                             <img src={logoSnip} alt="" />
                            </Link>
                        </div>
                        <div className="NavSearchBar">
                             
                                    <input className="inputSearch" type="text"  placeholder="Search for anything" />
                                    <button className="btnSearch"><span className="fa fa-search firsItem navbar-brand text-dark" aria-hidden="true"></span></button>
                            
                        </div>
                        <div className="NavSignIn">
                             <div>
                                <Link  style={{textDecoration:"none", color:"black"}} >
                                    <h5 onClick={() => handleSign()}>Sign In</h5>
                                 {open ? 
                                      <div className="modal">
                                          <div className="modalContent">
                                                   <div className="modalText">
                                                        <div className="modalHeader">
                                                                <span className="close" onClick={() => setOpen(false)}>&times;</span>
                                                                <h2>Sign in to continue</h2>
                                                        </div>
                                                        <div className="modalBody">
                                                                <div className="modalDesc"> <p>Sign in to register with your email address</p></div>
                                                                <div className="modalMail">
                                                                <p>Email Address</p>    
                                                                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  />
                                                                </div>
                                                                <button  onClick={() => handleSignIn()} className="ModalMainBtn"><Link style={{textDecoration:"none", color:"white"}} >Continue</Link></button>
                                                                
                                                                <div className="ModalTrouble"><u>Trouble Signing In?</u></div>
                                                                <div className="ModalOr "><p>OR</p></div>
                                                                <div className="ModalBtns">
                                                                        <button className="ModalMainBtns"><Link to="/home" style={{textDecoration:"none", color:"Black"}} >Continue with Google</Link></button>
                                                                        <button className="ModalMainBtns"><Link to="/home" style={{textDecoration:"none", color:"Black"}} >Continue with Facebook</Link></button>
                                                                        <button className="ModalMainBtns"><Link to="/home" style={{textDecoration:"none", color:"Black"}} >Continue with Apple</Link></button>

                                                                </div>
                                                        </div>
                                                        <div className="modalFooter">
                                                                 <p>By clicking Continue or Continue with Google,<br/>
                                                                  Facebook, or Apple, you agree to Etsy's Terms of<br/> Use  and Privacy Policy. Etsy may send you <br/>
                                                                   communications; you may change your preferences<br/> in your account settings. We'll never post without <br/>
                                                                   your permission.</p>
                                                        </div>
                                                </div>
                                           </div>
                                     </div>:<> <p>{msg}</p></> }
                                </Link>
                                </div>
                                {/* <div>
                                         <p>{msg}</p>
                                </div> */}
                             
                        </div><br/>
                        <div className="NavBasketbar">
                              
                               <Link to="/cart">
                                    <svg height="20" viewBox="0 0 24 24"   width="55" >
                                        <path className="NavBasket" d="M21 10a1 1 0 0 0-1-1h-3c.059-.682.287-4.441-1.611-6.555A4.363 4.363 0 0 0 12 1a4.363 4.363 0 0 0-3.394 1.445C6.709 4.559 6.937 8.318 7 9H4a1 1 0 0 0-1 1c0 .752.008 7.413 1.12 9.478 1.416 2.622 5.92 3.474 7.88 3.474 2.12 0 6.61-1.024 7.888-3.492C20.992 17.326 21 10.74 21 10zm-5.307 7c.094-.43.19-.862.283-1.283l.159-.717h2.651c-.066.727-.149 1.412-.251 2h-2.842zM5.457 17c-.1-.586-.183-1.271-.248-2h2.656l.159.717c.093.421.189.853.283 1.283h-2.85zm4.519-1.717L9.914 15h4.173l-.063.283c-.13.585-.258 1.162-.378 1.717h-3.292c-.119-.554-.247-1.131-.377-1.717zM9.479 13c-.156-.744-.289-1.436-.376-2H14.9c-.087.564-.22 1.256-.376 2H9.479zm9.446 0h-2.362c.152-.748.278-1.431.354-2h2.075c-.01.623-.033 1.306-.067 2zM10.1 3.779A2.412 2.412 0 0 1 12 3a2.412 2.412 0 0 1 1.9.779c1.205 1.339 1.2 4.146 1.1 5.114a.924.924 0 0 0 .01.106H8.984a.924.924 0 0 0 .01-.106c-.101-.968-.102-3.775 1.106-5.114zM7.083 11c.076.569.2 1.252.354 2H5.073c-.034-.693-.056-1.376-.066-2h2.076zm-.844 8h2.483c.108.562.191 1.061.237 1.457A6.514 6.5
                                                            14 0 0 1 6.239 19zm4.756 1.885A13.5 13.5 0 0 0 10.756 19h2.489a13.537 13.537 0 0 0-.239 1.881 8.218 8.218 0 0 1-1.006.071 8.657 8.657 0 0 1-1.005-.067zm4.049-.445c.046-.394.129-.886.235-1.441h2.489a6.656 6.656 0 0 1-2.724 1.442z">

                                        </path>

                                        </svg>
                                        
                               </Link>
                             
                                <div className="counter">
                                {count}
                               </div>
                        </div>
                    </div>

                    <div className="NavSecond flex sbw">
                         <div className="NavTitle1">
                                <h5>Jewellery & Accessories</h5>
                        </div>
                        <div className="NavTitle2">
                                <h5>Clothing & Shoes</h5>
                        </div>
                        <div className="NavTitle3">
                                <h5>Home & Living</h5>
                        </div>
                        <div className="NavTitle4">
                                <h5>Wedding & Party</h5>
                        </div>
                        <div className="NavTitle5">
                                <h5>Toys & Entertainment</h5>
                        </div>
                        <div className="NavTitle6">
                                <h5>Art & Collectibles</h5>
                        </div>
                        <div className="NavTitle7">
                                <h5>Craft Supplies & Tools</h5>
                        </div>
                        <div className="NavTitle8">
                                <h5>Vintage</h5>
                        </div>
                    </div>

                </div>


    </>
}


export default Header;