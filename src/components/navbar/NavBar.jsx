import React,{useState} from "react";
import "../navbar/_navbar.style.scss";
// import Brightness3RoundedIcon from 'Brightness3';
//Animations
// import {motion} from "framer-motion";
// import { BoxAnimationDown } from "../../animations";

const NavBar = () => {

    const [navStatus, setnavStatus] = useState(false);

  

    return (

        <nav className="navBar">

            <div className="logo">

                <h1>
                <span className="logo_span">Web</span>Stack
                </h1>
                
            </div>

            <ul className={`navLinks ${navStatus ? 'navActive' : ''}`}>


                <li><a href="#Home" className="nav_active">Home</a></li>
                <li><a href="#team">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testemonials">Testemonials</a></li>
                {/* <li><a href="#footer">Subscribe</a></li> */}

            </ul>

            <a className="navBtn" href="#hire">Hire Us</a>
            
            
            <div class={`burger ${navStatus ? 'x' : ''}`} onClick={() => setnavStatus(!navStatus)}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>

        </nav>
    )
}

export default NavBar;