import React, {useEffect, useContext} from "react"
import Header from "../Components/Header"
import img1 from "../Assets/Banner img_1.jpg"
import img2 from "../Assets/Banner img_2.jpg"
import img3 from "../Assets/Banner img_3.jpg"


import img4 from "../Assets/Banner img_4.jpg"
import img5 from "../Assets/Banner img_5.jpg"
import img6 from "../Assets/Edit img_1.jpg"
import img7 from "../Assets/Edit img_2.jpg"
import img8 from "../Assets/Edit img_3.jpg"
import img9 from "../Assets/Edit img_4.jpg"
import Bannerimg from "../Components/Bannerimg"
import Popular from "../Components/Popular"
import Selections from "../Components/Selections"
import Footer from "../Components/Footer"
import {Storage} from "../Context/Store"



function Home(){
    let Store = useContext(Storage);
    let [post, setPost] = Store.poster;


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

    return <>
            <Header/>
            <div className="Banner">
                    <div className="BannerCon">
                <div className="BannerFirst">
                        <p>Find things you'll love. Support independent sellers. Only on Etsy.</p>
                        <h4>Everyday finds</h4>
                </div>
                <div className="BannerSecond">
                 <Bannerimg
                            
                            image={img5}
                            desc="Self-Care"
                       />
                       
                {post.map((e) => {
                          if (e.category === "La Mattina" ){
                                return (
                                    <Bannerimg
                                    key={e._id}
                                    id={e._id}
                                    image={e.image}
                                    desc={e.name}
                                    
                          />
                                )
                          }
                      })}
                      <Bannerimg
                            
                            image={img3}
                            desc="Outdoor & Decor"
                            
                            />
                </div>
                
            </div>
            </div>
            <br/>
           <div className="Popular">
               <div className="PopularRight">
                    <h1>Popular gifts right now</h1>
               </div>
               <div className="PopularImages flex gap">
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
                            image={img7}
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
                            image={img6}
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
               </div>
           </div>
           <br/> <br/> <br/>
            <div className=" Selection">
                    <div className="SelectEdit flex">
                            <h1>Shop our selections </h1>
                            <p>Items hand-picked by our editors</p>
                    </div>
                   <div className="SelectionImages flex gap">
                      <Selections
                            image={img7}
                            desc="Anniversary Gifts"
                        />
                        <Selections
                            image={img6}
                            desc="Gift for him"
                        />
                        <Selections
                            image={img8}
                            desc="Gifts for her"
                        />
                        <Selections
                            image={img9}
                            desc="Wedding Gifts"
                        />
                        <Selections
                            image={img7}
                            desc="Birthday Gifts"
                        />
                        <Selections
                            image={img6}
                            desc="Personalised gift ideas"
                        />
                   </div>
            </div>
            <div className="What">
                    <div className=" WhatIs">
                            <h1>What is Etsy?</h1>
                            <p><u>Read our wonderfully weird story</u></p>
                    </div>
                    <div className="WhatTrio flex gap">
                            <div className="WhatGood">
                                <h1>A community doing good</h1>
                                <p>Etsy is a global online marketplace, where <br/>
                                people come together to make, sell, buy and<br/>
                                 collect unique items. We’re also a community <br/>
                                pushing for positive change for small<br/>
                                 businesses, people, and the planet. Here are <br/>
                                 some of the ways we’re making a positive<br/>
                                  impact, together.</p>
                            </div>
                            <div className="WhatSupport">
                                <h1>Support independent<br/> creators</h1>
                                <p>Etsy is a global online marketplace, where <br/>
                                people come together to make, sell, buy and<br/>
                                 collect unique items. We’re also a community <br/>
                                pushing for positive change </p>
                            </div>
                            <div className="WhatPeace">
                                <h1>Peace of mind</h1>
                                <p>Etsy is a global online marketplace, where <br/>
                                people come together to make, sell, buy and<br/>
                                 collect unique items.</p>
                            </div>
                    </div>
                    <div className="WhatBtn">
                            <h5>Have a question? Well, we’ve got some answers.</h5>
                            <button>Go to Help Center</button>
                    </div>
            </div>
            <Footer/>
            </>

            
}

export default Home;