import React from "react";
import '../App.css';
import diw from'../assets/13.jpg';
import ab from '../assets/14.jpg'

function about(){
    return(
        <div>
            <section className="about" id="about">
<div className="flex">
    <div className="image">
        <img src={diw} alt=""/>
    </div>
    <div className="content">
        <h3>subh diwali</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima atque ipsam itaque ut distinctio veritatis perspiciatis eum enim modi?</p>
        <button className="btn" onClick={()=>{}}>read more</button>
    </div>
</div>

<div className="flex">
    <div className="content">
        <h3>your wishes</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima atque ipsam itaque ut distinctio veritatis perspiciatis eum enim modi?</p>
        <button className="btn" onClick={()=>{}}>read more</button>
    </div>
    <div className="image">
        <img src={ab} alt=""/>
    </div>
</div>
</section>

        </div>
    );
}

export default about;