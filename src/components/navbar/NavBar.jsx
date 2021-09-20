import React,{useState} from "react";
import "../navbar/_navbar.style.scss";
// import Brightness3RoundedIcon from '@material-ui/icons/Brightness3';
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
                <li><a href="#abt">About us</a></li>
                <li><a href="#ser">Services</a></li>
                <li><a href="#test">Testemonials</a></li>
                <li><a href="#sub">Subscribe</a></li>

            </ul>

            <button className="navBtn">Hire Us</button>
            
            
            <div class={`burger ${navStatus ? 'x' : ''}`} onClick={() => setnavStatus(!navStatus)}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>

        </nav>
    )
}

export default NavBar;