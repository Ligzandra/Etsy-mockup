import React from "react"
// import {Link} from "react-router-dom";
import img10 from "../Assets/FootLog.JPG"
import img11 from "../Assets/FootInsta.JPG"
import img12 from "../Assets/FootFace.JPG"


import img13 from "../Assets/FootPin.JPG"
import img14 from "../Assets/FootTube.JPG"
import img15 from "../Assets/FootTweet.JPG"
// import img16 from "../Assets/FootGlo.JPG"
import img17 from "../Assets/FootImg.JPG"

function Footer(props){
    return <>

             <div className="FootSec">
                     <div className="FootSecImg">
                         <img src={img17} alt=""/>
                     </div> 
                        <div className="FootSecBack">
                             <div className="FootSecDesc ">
                                    <div className="FootSecInfo flex sbw">
                                        <p className="FootInfo">Shop</p>
                                        <p className="FootInfouni"> &#8964; </p>
                                    </div>
                                    <div className="FootSecInfo flex sbw">
                                        <p className="FootInfo">Sell</p>
                                        <p className="FootInfouni"> &#8964; </p>
                                    </div>
                                    <div className="FootSecInfo flex sbw">
                                        <p className="FootInfo">About</p>
                                        <p className="FootInfouni"> &#8964; </p>
                                    </div>
                                    <div className="FootSecInfo flex sbw">
                                        <p className="FootInfo">Help</p>
                                        <p className="FootInfouni"> &#8964; </p>
                                    </div>
                                </div>        

                                <div className="FootDownload">
                                    <div className="FootDownloadbutton">
                                        <button className="FootDownbtn flex"><img src={img10} alt=""/><p className="FootbtnTxt">Download the Etsy App</p> </button>
                                    </div>   
                                        <div className=" FootSecSocial">
                                                <img src={img11} alt=""/>
                                                <img src={img12} alt=""/>
                                                <img src={img13} alt=""/>
                                                <img src={img15} alt=""/>
                                                <img src={img14} alt=""/>
                                        </div>
                                </div>
                        </div>
              </div>

    </>
}


export default Footer;