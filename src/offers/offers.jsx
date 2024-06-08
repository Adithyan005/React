import React from "react";
import '../App.css';
import phone from '../assets/17.webp';
import watch from '../assets/18.webp';
import furn from '../assets/19.jpg';
import shoe from '../assets/20.jpg';
import lap from '../assets/21.jpg';
import formal from '../assets/22.webp';
import casual from '../assets/23.webp';
import cosmet from '../assets/24.png'

function offers(){
    return(
        <div>
            <div className="offer-countdown">
        <section className="content">
            
            <h3>hurry up!</h3>
            <p>offers ends in :</p>

            <div className="flex">
                <div className="box">
                    <div className="count" id="day">00</div>
                    <span>days</span>
                </div>

                <div className="box">
                    <div className="count" id="hour">00</div>
                    <span>hours</span>
                </div>

                <div className="box">
                    <div className="count" id="minute">00</div>
                    <span>minutes</span>
                </div>

                <div className="box">
                    <div className="count" id="second">00</div>
                    <span>seconds</span>
                </div>
            
            </div>

            <a href="#offers" className="btn">view offers</a>
        
        </section>
    
    </div>

    <section className="offers" id="offers">
        <div className="swiper products-slidebar">
            <div className="swiper-wrapper">
                
                <div className="swiper-slide box">
                    <img src={phone} width="40%" height="20%" alt=""/>
                    <h3>Smartphones</h3>
                    <p>Upto 20% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>

                <div className="swiper-slide box">
                    <img src={watch} width="40%" height="30%" alt=""/>
                    <h3>Smart Watches</h3>
                    <p>Upto 50% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>

                <div className="swiper-slide box">
                    <img src={furn} width="40%" alt=""/>
                    <h3>Furnitures</h3>
                    <p>Upto 10% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>

                <div className="swiper-slide box">
                    <img src={shoe} width="40%" alt=""/>
                    <h3>Shoes</h3>
                    <p>Upto 50% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>

                <div className="swiper-slide box">
                    <img src={lap} width="40%" alt=""/>
                    <h3>Laptops</h3>
                    <p>Upto 30% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>

                <div className="swiper-slide box">
                    <img src={formal} width="40%" alt=""/>
                    <h3>Formal Wear</h3>
                    <p>Upto 20% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>

                <div className="swiper-slide box">
                    <img src={casual} width="40%" alt=""/>
                    <h3>Casual Wear</h3>
                    <p>Upto 60% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>

                <div className="swiper-slide box">
                    <img src={cosmet} width="40%" alt=""/>
                    <h3>Cosmetics</h3>
                    <p>Upto 15% off</p>
                    <button classNameName="btn" onClick={()=>{}}>let's go</button>
                </div>
            </div>

            <div className="swiper-pagination"></div>
            
        </div>
    
    </section>

        </div>
    );
}

export default offers;