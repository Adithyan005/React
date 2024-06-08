import React from "react";
import '../App.css';
// import gif from '../assets/27.gif'

function contact(){
    return(
        <div>
            <div className="contact-container">
        <section className="row">
            <div className="info-container">
                <div className="box">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                        <h3>Address</h3>
                        <p>Mumbai, India - 234 567</p>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-phone"></i>
                    <div>
                        <h3>Phone</h3>
                        <p>+91 99234 87632</p>
                        <p>+91 97811 67494</p>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-envelope"></i>
                    <div>
                        <h3>Email</h3>
                        <p>info@gmail.com</p>
                        <p>example@gmail.com</p>
                    </div>
                </div>
            </div>
            <form action="" method="post">
                <h3>Get In Touch</h3>
                <div class="flex">
                    <input type="text" name="name" maxlength="30" class="input" placeholder="Your Name"/>
                    <input type="number" name="number" maxlength="10" class="input" placeholder="Your Number"/>
                </div>
                <input type="email" name="email" maxlength="30" placeholder="Your Email" class="input"/>
                <textarea name="message" class="input" cols="30" rows="10" maxlength="1000" placeholder="Your Message"></textarea>
                <input type="submit" value="send message" class="btn"/>
            </form>


        </section>
    </div>

    
        </div>
    );
}

export default contact;