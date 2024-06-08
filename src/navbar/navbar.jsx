import React from "react";
import '../App.css';
import navlogo from '../assets/logo.avif';
import wish from '../assets/3.png';
function nav()
{
    return(
        <div>
            <header className="header">
    
        <section className="flex">
        
            <a href="#home" className="logo"><img src={navlogo} alt=""/></a>

    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#offers">offers</a>
        <a href="#contact">contact</a>
    </nav>

    <div id="menu-btn" className="fas fa-bars-staggered"></div>
    </section>

    </header>

    <div className="home" id="home">
        <img src={wish} width="500rem" className="home-img" alt=""/>
    </div>

        

        
        </div>
    );
}

export default nav;